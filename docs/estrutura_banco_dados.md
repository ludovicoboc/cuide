# Estrutura do Banco de Dados - StayFocus

Este documento detalha a estrutura do banco de dados Supabase para o projeto StayFocus, incluindo tabelas, relacionamentos e políticas de segurança.

## Tabelas Principais

### Usuários e Preferências

```sql
-- Extensão da tabela de usuários do Supabase Auth
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  nome TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Preferências visuais e configurações do usuário
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  alto_contraste BOOLEAN DEFAULT false,
  reducao_estimulos BOOLEAN DEFAULT false,
  texto_grande BOOLEAN DEFAULT false,
  tema TEXT DEFAULT 'system',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id)
);

-- Metas diárias do usuário
CREATE TABLE metas_diarias (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  tipo TEXT NOT NULL,
  valor INTEGER NOT NULL,
  ativa BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### Alimentação

```sql
-- Registro de refeições
CREATE TABLE refeicoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  data TIMESTAMP WITH TIME ZONE NOT NULL,
  tipo TEXT NOT NULL,
  descricao TEXT,
  foto_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Registro de hidratação
CREATE TABLE hidratacao (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  data TIMESTAMP WITH TIME ZONE NOT NULL,
  quantidade_ml INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Receitas
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

-- Lista de compras
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

### Autoconhecimento

```sql
-- Notas de autoconhecimento
CREATE TABLE notas_autoconhecimento (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  categoria TEXT NOT NULL,
  titulo TEXT NOT NULL,
  conteudo TEXT,
  tags TEXT[],
  imagem_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### Estudos

```sql
-- Concursos
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

-- Conteúdo programático
CREATE TABLE conteudo_programatico (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  concurso_id UUID REFERENCES concursos(id) ON DELETE CASCADE,
  descricao TEXT NOT NULL,
  progresso INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Sessões de estudo
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

-- Simulados
CREATE TABLE simulados (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  titulo TEXT NOT NULL,
  total_questoes INTEGER NOT NULL,
  concurso_id UUID REFERENCES concursos(id),
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT now(),
  data_conclusao TIMESTAMP WITH TIME ZONE,
  personalizado BOOLEAN DEFAULT false
);

-- Questões de simulado
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

-- Materiais do Drive
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

### Finanças

```sql
-- Gastos
CREATE TABLE gastos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  categoria TEXT NOT NULL,
  descricao TEXT,
  data TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Envelopes
CREATE TABLE envelopes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  nome TEXT NOT NULL,
  orcamento DECIMAL(10,2) DEFAULT 0,
  saldo_atual DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Pagamentos
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

### Hiperfocos

```sql
-- Projetos de hiperfoco
CREATE TABLE hiperfoco_projetos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  titulo TEXT NOT NULL,
  descricao TEXT,
  cor TEXT DEFAULT '#3498db',
  data_inicio TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tarefas de hiperfoco
CREATE TABLE hiperfoco_tarefas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  projeto_id UUID REFERENCES hiperfoco_projetos(id) ON DELETE CASCADE,
  descricao TEXT NOT NULL,
  concluida BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### Saúde e Sono

```sql
-- Medicamentos
CREATE TABLE medicamentos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  nome TEXT NOT NULL,
  dosagem TEXT,
  intervalo_horas INTEGER,
  horarios JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Registros de medicamentos
CREATE TABLE registros_medicamentos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  medicamento_id UUID REFERENCES medicamentos(id) ON DELETE CASCADE,
  data_hora TIMESTAMP WITH TIME ZONE DEFAULT now(),
  tomado BOOLEAN DEFAULT true
);

-- Registros de humor
CREATE TABLE registros_humor (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  nivel INTEGER NOT NULL,
  descricao TEXT,
  fatores TEXT[],
  data_hora TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Registros de sono
CREATE TABLE registros_sono (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  inicio TIMESTAMP WITH TIME ZONE NOT NULL,
  fim TIMESTAMP WITH TIME ZONE,
  qualidade INTEGER,
  observacoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Lembretes de sono
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

### Assistente Sati

```sql
-- Conversas com a Sati
CREATE TABLE sati_conversas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  titulo TEXT,
  origem TEXT NOT NULL, -- 'whatsapp' ou 'web'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Mensagens das conversas
CREATE TABLE sati_mensagens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversa_id UUID REFERENCES sati_conversas(id) ON DELETE CASCADE,
  remetente TEXT NOT NULL, -- 'usuario' ou 'sati'
  conteudo TEXT NOT NULL,
  tipo_conteudo TEXT DEFAULT 'texto', -- 'texto', 'imagem', 'audio'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Configurações da Sati por usuário
CREATE TABLE sati_configuracoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  whatsapp_ativo BOOLEAN DEFAULT false,
  numero_whatsapp TEXT,
  notificacoes_ativas BOOLEAN DEFAULT true,
  tom_voz TEXT DEFAULT 'amigavel',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id)
);
```

## Políticas de Segurança (RLS)

### Política Básica para Todas as Tabelas

```sql
-- Política para leitura (usuário só pode ver seus próprios dados)
CREATE POLICY "Usuários podem ler apenas seus próprios dados" ON [TABELA]
  FOR SELECT
  USING (auth.uid() = user_id);

-- Política para inserção (usuário só pode inserir seus próprios dados)
CREATE POLICY "Usuários podem inserir apenas seus próprios dados" ON [TABELA]
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Política para atualização (usuário só pode atualizar seus próprios dados)
CREATE POLICY "Usuários podem atualizar apenas seus próprios dados" ON [TABELA]
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Política para exclusão (usuário só pode excluir seus próprios dados)
CREATE POLICY "Usuários podem excluir apenas seus próprios dados" ON [TABELA]
  FOR DELETE
  USING (auth.uid() = user_id);
```

## Índices para Otimização

```sql
-- Índices para busca textual
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX receitas_nome_idx ON receitas USING GIN (nome gin_trgm_ops);
CREATE INDEX notas_autoconhecimento_titulo_idx ON notas_autoconhecimento USING GIN (titulo gin_trgm_ops);
CREATE INDEX notas_autoconhecimento_conteudo_idx ON notas_autoconhecimento USING GIN (conteudo gin_trgm_ops);

-- Índices para consultas frequentes
CREATE INDEX registros_sono_user_id_inicio_idx ON registros_sono(user_id, inicio);
CREATE INDEX gastos_user_id_data_idx ON gastos(user_id, data);
CREATE INDEX refeicoes_user_id_data_idx ON refeicoes(user_id, data);
```

## Funções e Triggers

```sql
-- Função para atualizar timestamp de updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at em tabelas relevantes
CREATE TRIGGER update_user_preferences_updated_at
BEFORE UPDATE ON user_preferences
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Repetir para outras tabelas que possuem o campo updated_at
```

## Próximos Passos

1. Implementar as tabelas no Supabase
2. Configurar políticas RLS para cada tabela
3. Criar índices para otimização
4. Implementar funções e triggers
5. Testar a estrutura com dados de exemplo
