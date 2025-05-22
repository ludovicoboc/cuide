
# Análise Detalhada para Migração das Páginas para Supabase

Seguindo sua solicitação, analisei cada página em ordem alfabética do arquivo, identificando as especificidades a considerar durante a migração para Supabase. Todas as recomendações seguem as práticas do guia de migração fornecido.

## 1. pagina_app_alimentacao_page.md

**Especificidades:**
- Gerencia planejamento de refeições e registros de hidratação
- Necessita estrutura de tabelas para:
  ```sql
  CREATE TABLE refeicoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    data TIMESTAMP WITH TIME ZONE NOT NULL,
    tipo TEXT NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE hidratacao (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    data TIMESTAMP WITH TIME ZONE NOT NULL,
    quantidade_ml INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Implementar hook `useRealtimeData` para sincronização de registros alimentares
- Migrar do `alimentacaoStore.ts` para consultas Supabase

## 2. pagina_app_autoconhecimento_page.md

**Especificidades:**
- Organiza notas por categorias (Quem sou, Meus porquês, Meus padrões)
- Requer tabela para armazenamento de notas estruturadas:
  ```sql
  CREATE TABLE notas_autoconhecimento (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    categoria TEXT NOT NULL,
    titulo TEXT NOT NULL,
    conteudo TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Implementar RLS com filtro por `categoria` além do `user_id`
- Migrar o estado `modoRefugio` do `autoconhecimentoStore` para `user_preferences`

## 3. pagina_app_concursos_page.md

**Especificidades:**
- Gerencia lista de concursos e seus detalhes (status, organizadora, data da prova)
- Necessita estrutura relacionada:
  ```sql
  CREATE TABLE concursos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    titulo TEXT NOT NULL,
    organizadora TEXT,
    data_prova TIMESTAMP WITH TIME ZONE,
    status TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE conteudo_programatico (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    concurso_id UUID REFERENCES concursos(id) ON DELETE CASCADE,
    descricao TEXT NOT NULL,
    progresso INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Implementar função de importação JSON diretamente para o Supabase
- Utilizar hooks para calcular progresso geral em tempo real

## 4. pagina_app_estudos_materiais_page.md

**Especificidades:**
- Integra com Google Drive para acesso a materiais de estudo
- Requer configuração para:
  ```sql
  CREATE TABLE materiais_drive (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    tipo TEXT NOT NULL,
    folder_id TEXT NOT NULL,
    file_id TEXT,
    file_name TEXT,
    last_accessed TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar chamadas API `/api/drive/listar-materiais` para usar client Supabase
- Implementar caching de consultas frequentes ao Google Drive
- Considerar storage do Supabase para armazenamento direto de arquivos

## 5. pagina_app_estudos_page.md

**Especificidades:**
- Centraliza ferramentas de estudo, incluindo Pomodoro
- Necessita tabelas para registro de sessões:
  ```sql
  CREATE TABLE sessoes_estudo (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    inicio TIMESTAMP WITH TIME ZONE NOT NULL,
    fim TIMESTAMP WITH TIME ZONE,
    duracao_minutos INTEGER,
    assunto TEXT,
    concurso_id UUID REFERENCES concursos(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar componente TemporizadorPomodoro para sincronização entre dispositivos
- Utilizar RLS para filtrar próximo concurso específico do usuário

## 6. pagina_app_estudos_simulado_page.md

**Especificidades:**
- Gerencia fluxo de simulados (carregamento, revisão, resultados)
- Requer estrutura complexa:
  ```sql
  CREATE TABLE simulados (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    titulo TEXT NOT NULL,
    total_questoes INTEGER NOT NULL,
    concurso_id UUID REFERENCES concursos(id),
    data_criacao TIMESTAMP WITH TIME ZONE DEFAULT now(),
    data_conclusao TIMESTAMP WITH TIME ZONE
  );
  
  CREATE TABLE questoes_simulado (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    simulado_id UUID REFERENCES simulados(id) ON DELETE CASCADE,
    enunciado TEXT NOT NULL,
    alternativas JSONB NOT NULL,
    gabarito TEXT NOT NULL,
    resposta_usuario TEXT,
    assunto TEXT,
    dificuldade TEXT,
    explicacao TEXT,
    ordem INTEGER
  );
  ```
- Migrar estados do `useSimuladoStore` (status, loading, reviewing, results)
- Implementar mecanismo de sincronização para não perder progresso entre dispositivos

## 7. pagina_app_estudos_simulado-personalizado_page.md

**Especificidades:**
- Carrega simulados personalizados do localStorage
- Utilizar mesmas tabelas de simulados regulares
- Implementar migração específica para questões armazenadas em `simulado_personalizado_questoes`
- Adicionar campo para identificar simulados personalizados:
  ```sql
  ALTER TABLE simulados ADD COLUMN personalizado BOOLEAN DEFAULT false;
  ```

## 8. pagina_app_financas_page.md

**Especificidades:**
- Gerencia rastreamento de gastos e envelopes virtuais
- Estrutura financeira necessária:
  ```sql
  CREATE TABLE gastos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    categoria TEXT NOT NULL,
    descricao TEXT,
    data TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE envelopes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    nome TEXT NOT NULL,
    orcamento DECIMAL(10,2) DEFAULT 0,
    saldo_atual DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE pagamentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    descricao TEXT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_vencimento TIMESTAMP WITH TIME ZONE NOT NULL,
    recorrente BOOLEAN DEFAULT false,
    pago BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Utilizar carregamento dinâmico (next/dynamic) para componentes com Recharts no cliente
- Implementar soluções de cálculo de saldo em tempo real com triggers SQL

## 9. pagina_app_hiperfocos_page.md

**Especificidades:**
- Gerencia projetos de hiperfocos e suas tarefas
- Estrutura necessária:
  ```sql
  CREATE TABLE hiperfoco_projetos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    titulo TEXT NOT NULL,
    descricao TEXT,
    cor TEXT DEFAULT '#3498db',
    data_inicio TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE hiperfoco_tarefas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    projeto_id UUID REFERENCES hiperfoco_projetos(id) ON DELETE CASCADE,
    descricao TEXT NOT NULL,
    concluida BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar navegação por abas preservando estado entre sessões
- Implementar cálculo de estatísticas com funções SQL

## 10. pagina_app_lazer_page.md

**Especificidades:**
- Gerencia atividades de lazer e sugestões de descanso
- Estrutura simples necessária:
  ```sql
  CREATE TABLE atividades_lazer (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    nome TEXT NOT NULL,
    categoria TEXT,
    duracao_minutos INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE sugestoes_descanso (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    descricao TEXT NOT NULL,
    favorita BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar temporizador de lazer para sincronização

## 11. pagina_app_page.md (Dashboard)

**Especificidades:**
- Dashboard central com múltiplas fontes de dados
- Requer otimização com Server Components:
  ```jsx
  // Exemplo de implementação de carregamento inicial no servidor
  export default async function DashboardPage() {
    const supabase = createServerClient();
    
    // Buscar dados iniciais para o dashboard
    const { data: prioridades } = await supabase
      .from('prioridades')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('concluida', false)
      .order('data', { ascending: true });
      
    // Outros dados...
    
    return <ClientDashboard initialData={{ prioridades }} />;
  }
  ```
- Implementar função de sincronização de preferências visuais
- Utilizar `useHybridState` para otimização de carregamento

## 12. pagina_app_perfil_ajuda_page.md

**Especificidades:**
- Página estática com informações de ajuda
- Manter como página estática, sem necessidade de migração específica
- Atualizar documentação para refletir o novo fluxo de backup com Supabase

## 13. pagina_app_perfil_page.md

**Especificidades:**
- Gerencia informações do perfil e preferências
- Migrar controle de preferências visuais:
  ```sql
  CREATE TABLE user_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    alto_contraste BOOLEAN DEFAULT false,
    reducao_estimulos BOOLEAN DEFAULT false,
    texto_grande BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(user_id)
  );
  ```
- Implementar hook de tema conforme exemplo do guia de migração
- Substituir função de redefinição local por chamada para Supabase

## 14. pagina_app_receitas_adicionar_page.md

**Especificidades:**
- Formulário para adicionar receitas
- Estrutura necessária:
  ```sql
  CREATE TABLE receitas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    nome TEXT NOT NULL,
    ingredientes JSONB NOT NULL,
    modo_preparo TEXT,
    tempo_preparo INTEGER,
    porcoes INTEGER,
    categorias TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar lógica de adição de receitas para uso do `useRealtimeData`

## 15. pagina_app_receitas_lista-compras_page.md

**Especificidades:**
- Gerenciamento de lista de compras baseada em receitas
- Estrutura necessária:
  ```sql
  CREATE TABLE lista_compras (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    item TEXT NOT NULL,
    quantidade TEXT,
    unidade TEXT,
    comprado BOOLEAN DEFAULT false,
    receita_id UUID REFERENCES receitas(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Implementar sincronização em tempo real para marcação de itens comprados
- Função para geração automática de itens a partir de receitas selecionadas

## 16. pagina_app_receitas_page.md

**Especificidades:**
- Lista e filtra receitas por categoria ou termo de pesquisa
- Implementar busca otimizada no Supabase:
  ```sql
  -- Criar índice para busca textual
  CREATE EXTENSION IF NOT EXISTS pg_trgm;
  CREATE INDEX receitas_nome_idx ON receitas USING GIN (nome gin_trgm_ops);
  ```
- Migrar lógica de filtragem para queries SQL
- Utilizar cache para categorias frequentes

## 17. pagina_app_roadmap_page.md

**Especificidades:**
- Página estática com informações sobre o roadmap
- Sem necessidade de migração específica (conteúdo estático)
- Atualizar para incluir informações sobre a migração para Supabase

## 18. pagina_app_saude_page.md

**Especificidades:**
- Registro de medicamentos e monitoramento de humor
- Estrutura necessária:
  ```sql
  CREATE TABLE medicamentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    nome TEXT NOT NULL,
    dosagem TEXT,
    intervalo_horas INTEGER,
    horarios JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE registros_medicamentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    medicamento_id UUID REFERENCES medicamentos(id) ON DELETE CASCADE,
    data_hora TIMESTAMP WITH TIME ZONE DEFAULT now(),
    tomado BOOLEAN DEFAULT true
  );
  
  CREATE TABLE registros_humor (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    nivel INTEGER NOT NULL,
    descricao TEXT,
    fatores TEXT[],
    data_hora TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Implementar busca por intervalos de datas para visualização histórica

## 19. pagina_app_sono_page.md

**Especificidades:**
- Gerencia registro e visualização do sono
- Estrutura necessária:
  ```sql
  CREATE TABLE registros_sono (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    inicio TIMESTAMP WITH TIME ZONE NOT NULL,
    fim TIMESTAMP WITH TIME ZONE,
    qualidade INTEGER,
    observacoes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  
  CREATE TABLE lembretes_sono (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    horario TIME NOT NULL,
    dias_semana INTEGER[], -- 0-6 para dias da semana
    ativo BOOLEAN DEFAULT true,
    mensagem TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  ```
- Migrar navegação por abas (registro, visualizador, lembretes)
- Implementar cálculo de estatísticas de sono com funções Supabase

Esta análise detalhada fornece um guia específico para cada página do aplicativo, cobrindo as estruturas de banco de dados necessárias e considerações especiais para a migração para o Supabase, seguindo as melhores práticas do guia de migração.
