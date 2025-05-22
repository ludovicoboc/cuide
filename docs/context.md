# Projeto StayFocus: Documentação Abrangente

## 1. Objetivo Geral do Projeto StayFocus

### Visão Geral
O StayFocus é uma aplicação abrangente projetada para auxiliar estudantes, profissionais e pessoas com TDAH (Transtorno do Déficit de Atenção com Hiperatividade) a gerenciar sua produtividade, foco e bem-estar de forma holística. O projeto nasceu da necessidade de criar uma ferramenta que não apenas ajude no gerenciamento de tarefas, mas que também integre aspectos importantes da vida cotidiana que impactam diretamente a capacidade de concentração e produtividade.

### Missão
Proporcionar uma plataforma integrada que auxilie os usuários a manter o foco, aumentar a produtividade e melhorar o bem-estar geral através de ferramentas personalizadas e adaptáveis às necessidades individuais.

### Objetivos Específicos

1. **Gestão de Produtividade e Foco**
   - Implementar técnicas comprovadas de gerenciamento de tempo, como o método Pomodoro
   - Oferecer ferramentas para planejamento e acompanhamento de tarefas
   - Desenvolver mecanismos para minimizar distrações e maximizar períodos de concentração
   - Criar sistemas de hiperfocos para projetos importantes

2. **Suporte ao Estudo e Preparação para Concursos**
   - Fornecer ferramentas específicas para organização de materiais de estudo
   - Implementar sistema de simulados e questões para prática
   - Desenvolver mecanismos de acompanhamento de progresso em conteúdos programáticos
   - Integrar recursos para acesso a materiais de estudo

3. **Promoção de Bem-Estar Integral**
   - Monitorar e incentivar hábitos saudáveis de alimentação e hidratação
   - Acompanhar padrões de sono e promover melhor qualidade de descanso
   - Oferecer ferramentas para autoconhecimento e reflexão
   - Incentivar momentos de lazer e descanso balanceados com períodos de produtividade

4. **Assistência Personalizada com IA**
   - Implementar assistente virtual (Sati) para suporte contextualizado
   - Utilizar tecnologia RAG (Retrieval Augmented Generation) para respostas precisas
   - Oferecer recomendações personalizadas baseadas nos padrões do usuário
   - Fornecer insights sobre produtividade e bem-estar

5. **Acessibilidade e Inclusão**
   - Desenvolver interface adaptável para diferentes necessidades
   - Implementar recursos de alto contraste e texto ampliado
   - Criar experiência com redução de estímulos para usuários sensíveis
   - Garantir compatibilidade com tecnologias assistivas

### Público-Alvo
- Estudantes universitários e de concursos públicos
- Profissionais que trabalham em ambientes com múltiplas demandas
- Pessoas com TDAH ou dificuldades de concentração
- Indivíduos interessados em melhorar sua produtividade e bem-estar geral

### Diferencial Competitivo
O StayFocus se diferencia de outras aplicações de produtividade por sua abordagem holística, que reconhece a interconexão entre diferentes aspectos da vida (alimentação, sono, lazer, finanças) e seu impacto direto na capacidade de foco e produtividade. Além disso, a integração de um assistente virtual baseado em IA com tecnologia RAG proporciona um suporte personalizado e contextualizado que evolui com o uso.

## 2. Estrutura do Projeto

### Arquitetura Geral

O StayFocus está sendo migrado para uma arquitetura moderna baseada em Supabase, seguindo princípios de desenvolvimento web contemporâneos:

```
StayFocus
├── Frontend (Next.js)
│   ├── Componentes de UI
│   ├── Páginas e Rotas
│   ├── Hooks Personalizados
│   └── Integração com Supabase
├── Backend (Supabase)
│   ├── Banco de Dados PostgreSQL
│   ├── Autenticação e Autorização
│   ├── Storage para Arquivos
│   └── Funções e Triggers
└── Assistente Virtual Sati
    ├── Integração com Maritaca AI
    ├── Sistema RAG
    └── Base de Conhecimento
```

### Estrutura de Diretórios

```
stayfocus-main/
├── .github/                    # Configurações de CI/CD e GitHub Actions
├── .next/                      # Build e cache do Next.js
├── components/                 # Componentes React reutilizáveis
│   ├── alimentacao/            # Componentes relacionados à alimentação
│   ├── assistente/             # Componentes do assistente virtual Sati
│   ├── autoconhecimento/       # Componentes de autoconhecimento
│   ├── common/                 # Componentes comuns (botões, inputs, etc.)
│   ├── concursos/              # Componentes para gestão de concursos
│   ├── estudos/                # Componentes para estudos e simulados
│   ├── financas/               # Componentes para gestão financeira
│   ├── hiperfocos/             # Componentes para projetos de hiperfoco
│   ├── layout/                 # Componentes de layout (header, sidebar, etc.)
│   ├── lazer/                  # Componentes para atividades de lazer
│   ├── perfil/                 # Componentes de perfil do usuário
│   ├── receitas/               # Componentes para gestão de receitas
│   ├── saude/                  # Componentes para monitoramento de saúde
│   └── sono/                   # Componentes para monitoramento do sono
├── docs/                       # Documentação do projeto
│   ├── especif.md              # Especificações gerais
│   ├── jira_sprints_1-3_infraestrutura.md    # Planejamento Sprints 1-3
│   ├── jira_sprints_4-7_assistente.md        # Planejamento Sprints 4-7
│   ├── jira_sprints_8-12_avancado_mobile.md  # Planejamento Sprints 8-12
│   └── jira_sprints_13-15_testes_lancamento.md # Planejamento Sprints 13-15
├── hooks/                      # Hooks React personalizados
│   ├── useAuth.ts              # Hook para autenticação
│   ├── useRealtime.ts          # Hook para sincronização em tempo real
│   ├── useSupabase.ts          # Hook para acesso ao Supabase
│   └── useTheme.ts             # Hook para gerenciamento de tema
├── lib/                        # Bibliotecas e utilitários
│   ├── assistente/             # Lógica do assistente virtual
│   ├── maritaca/               # Integração com Maritaca AI
│   ├── rag/                    # Sistema RAG (Retrieval Augmented Generation)
│   ├── supabase/               # Cliente e configurações do Supabase
│   └── utils/                  # Funções utilitárias
├── pages/                      # Páginas da aplicação (Next.js)
│   ├── _app.tsx                # Componente principal da aplicação
│   ├── _document.tsx           # Documento HTML personalizado
│   ├── api/                    # Rotas de API (Next.js API Routes)
│   ├── app/                    # Páginas principais da aplicação
│   │   ├── alimentacao.tsx     # Página de alimentação e hidratação
│   │   ├── autoconhecimento.tsx # Página de autoconhecimento
│   │   ├── concursos.tsx       # Página de gestão de concursos
│   │   ├── estudos/            # Páginas relacionadas a estudos
│   │   ├── financas.tsx        # Página de gestão financeira
│   │   ├── hiperfocos.tsx      # Página de projetos de hiperfoco
│   │   ├── index.tsx           # Dashboard principal
│   │   ├── lazer.tsx           # Página de atividades de lazer
│   │   ├── perfil/             # Páginas de perfil e configurações
│   │   ├── receitas/           # Páginas de receitas e alimentação
│   │   ├── saude.tsx           # Página de monitoramento de saúde
│   │   └── sono.tsx            # Página de monitoramento do sono
│   ├── auth/                   # Páginas de autenticação
│   └── index.tsx               # Página inicial (landing page)
├── public/                     # Arquivos estáticos
│   ├── assets/                 # Imagens e outros assets
│   ├── fonts/                  # Fontes personalizadas
│   └── icons/                  # Ícones da aplicação
├── services/                   # Serviços de comunicação com backend
│   ├── AlimentacaoService.ts   # Serviço para dados de alimentação
│   ├── AutoconhecimentoService.ts # Serviço para dados de autoconhecimento
│   ├── BaseService.ts          # Classe base para serviços
│   ├── ConcursosService.ts     # Serviço para dados de concursos
│   ├── EstudosService.ts       # Serviço para dados de estudos
│   ├── FinancasService.ts      # Serviço para dados financeiros
│   ├── HiperfocosService.ts    # Serviço para dados de hiperfocos
│   ├── LazerService.ts         # Serviço para dados de lazer
│   ├── ReceitasService.ts      # Serviço para dados de receitas
│   ├── SaudeService.ts         # Serviço para dados de saúde
│   ├── SonoService.ts          # Serviço para dados de sono
│   └── UserService.ts          # Serviço para dados de usuário
├── stores/                     # Stores para gerenciamento de estado
│   ├── alimentacaoStore.ts     # Store para dados de alimentação
│   ├── autoconhecimentoStore.ts # Store para dados de autoconhecimento
│   ├── concursosStore.ts       # Store para dados de concursos
│   ├── estudosStore.ts         # Store para dados de estudos
│   ├── financasStore.ts        # Store para dados financeiros
│   ├── hiperfocosStore.ts      # Store para dados de hiperfocos
│   ├── lazerStore.ts           # Store para dados de lazer
│   ├── perfilStore.ts          # Store para dados de perfil
│   ├── receitasStore.ts        # Store para dados de receitas
│   ├── saudeStore.ts           # Store para dados de saúde
│   └── sonoStore.ts            # Store para dados de sono
├── styles/                     # Estilos globais e temas
│   ├── globals.css             # Estilos globais
│   └── theme.ts                # Configuração de tema
├── types/                      # Definições de tipos TypeScript
│   ├── alimentacao.ts          # Tipos para alimentação
│   ├── autoconhecimento.ts     # Tipos para autoconhecimento
│   ├── concursos.ts            # Tipos para concursos
│   ├── estudos.ts              # Tipos para estudos
│   ├── financas.ts             # Tipos para finanças
│   ├── hiperfocos.ts           # Tipos para hiperfocos
│   ├── lazer.ts                # Tipos para lazer
│   ├── receitas.ts             # Tipos para receitas
│   ├── saude.ts                # Tipos para saúde
│   ├── sono.ts                 # Tipos para sono
│   └── user.ts                 # Tipos para usuário
├── .env.example                # Exemplo de variáveis de ambiente
├── .eslintrc.js                # Configuração do ESLint
├── .gitignore                  # Arquivos ignorados pelo Git
├── jest.config.js              # Configuração do Jest para testes
├── next.config.js              # Configuração do Next.js
├── package.json                # Dependências e scripts
├── README.md                   # Documentação principal
├── supabase.js                 # Configuração do cliente Supabase
├── tailwind.config.js          # Configuração do Tailwind CSS
└── tsconfig.json               # Configuração do TypeScript
```

### Tecnologias Utilizadas

#### Frontend
- **Next.js**: Framework React para renderização híbrida (SSR/SSG/CSR)
- **React**: Biblioteca para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Zustand**: Biblioteca leve para gerenciamento de estado
- **React Query**: Gerenciamento de estado do servidor e cache
- **Framer Motion**: Biblioteca para animações
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas
- **Recharts**: Biblioteca para visualização de dados

#### Backend
- **Supabase**: Plataforma de desenvolvimento com:
  - **PostgreSQL**: Banco de dados relacional
  - **Auth**: Sistema de autenticação e autorização
  - **Storage**: Armazenamento de arquivos
  - **Realtime**: Sincronização em tempo real
  - **Edge Functions**: Funções serverless
  - **Row Level Security (RLS)**: Segurança em nível de linha

#### Assistente Virtual
- **Maritaca AI**: Plataforma brasileira de IA
- **Sabiá 3**: Modelo de linguagem grande (LLM)
- **RAG (Retrieval Augmented Generation)**: Técnica para melhorar respostas de IA
- **Vector Database**: Para armazenamento de embeddings

#### DevOps e Ferramentas
- **GitHub Actions**: CI/CD e automação
- **Jest e Testing Library**: Testes unitários e de integração
- **Cypress**: Testes end-to-end
- **ESLint e Prettier**: Linting e formatação de código
- **Husky e lint-staged**: Hooks de pré-commit
- **Jira**: Gerenciamento de projeto
- **Confluence**: Documentação colaborativa

#### Mobile (Planejado)
- **React Native**: Desenvolvimento mobile multiplataforma
- **Expo**: Ferramentas e serviços para React Native

## 3. Acesso à Documentação Técnica via Confluence MCP

### Espaço STAY no Confluence

O projeto StayFocus mantém toda sua documentação técnica no espaço "STAY" no Confluence. Este espaço contém informações detalhadas sobre a arquitetura, implementação, padrões de código e guias de desenvolvimento.

#### Páginas Principais

1. **Análise Detalhada para Migração das Páginas para Supabase**
   - Contém análise página por página do aplicativo
   - Detalha as especificidades de cada componente
   - Fornece esquemas SQL para cada entidade
   - Identifica desafios e soluções para migração

2. **Estrutura do Banco de Dados**
   - Documenta todas as tabelas do sistema
   - Detalha relacionamentos entre entidades
   - Fornece scripts SQL completos
   - Explica políticas de segurança (RLS)
   - Inclui índices e otimizações

3. **Plano de Implementação**
   - Descreve o cronograma detalhado do projeto
   - Divide o trabalho em sprints e fases
   - Estabelece critérios de aceitação
   - Define estratégia de lançamento
   - Identifica riscos e planos de mitigação

### Acessando a Documentação via MCP

Para acessar a documentação técnica do projeto StayFocus via Confluence MCP, utilize os seguintes endpoints:

#### Listar Todas as Páginas do Espaço STAY

```javascript
// Endpoint para listar todas as páginas do espaço STAY
const response = await confluenceMCP.get('/space/STAY/content');
```

#### Buscar Páginas Específicas

```javascript
// Buscar páginas relacionadas ao banco de dados
const response = await confluenceMCP.get('/content/search', {
  data: {
    cql: 'space = "STAY" AND text ~ "banco de dados"'
  }
});
```

#### Acessar Conteúdo de uma Página Específica

```javascript
// Acessar a página de Estrutura do Banco de Dados (ID: 164022)
const response = await confluenceMCP.get('/content/164022', {
  data: {
    expand: 'body.storage'
  }
});
```

#### Páginas por Categoria

Para facilitar a navegação, a documentação está organizada nas seguintes categorias:

1. **Arquitetura e Infraestrutura**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "arquitetura"'
     }
   });
   ```

2. **Guias de Implementação**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "implementacao"'
     }
   });
   ```

3. **Banco de Dados**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "banco-dados"'
     }
   });
   ```

4. **Assistente Virtual**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "assistente-virtual"'
     }
   });
   ```

5. **Mobile**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "mobile"'
     }
   });
   ```

6. **Testes e Qualidade**
   ```javascript
   const response = await confluenceMCP.get('/content/search', {
     data: {
       cql: 'space = "STAY" AND label = "testes"'
     }
   });
   ```

### Exemplos de Uso da Documentação

#### Consultando Detalhes de Implementação

Para obter detalhes sobre como implementar uma funcionalidade específica:

```javascript
// Exemplo: Buscar informações sobre implementação da autenticação
const response = await confluenceMCP.get('/content/search', {
  data: {
    cql: 'space = "STAY" AND text ~ "autenticação" AND label = "implementacao"'
  }
});

// Processar e utilizar as informações retornadas
const pages = response.results;
for (const page of pages) {
  console.log(`Página: ${page.title}`);
  console.log(`Link: ${page._links.webui}`);
}
```

#### Acessando Esquemas de Banco de Dados

Para consultar os esquemas de banco de dados para uma entidade específica:

```javascript
// Exemplo: Buscar esquema de banco de dados para a funcionalidade de concursos
const response = await confluenceMCP.get('/content/search', {
  data: {
    cql: 'space = "STAY" AND text ~ "concursos" AND label = "banco-dados"'
  }
});

// Acessar o conteúdo completo da primeira página encontrada
if (response.results.length > 0) {
  const pageId = response.results[0].id;
  const pageContent = await confluenceMCP.get(`/content/${pageId}`, {
    data: {
      expand: 'body.storage'
    }
  });

  // O esquema SQL estará disponível em pageContent.body.storage.value
}
```

### Mantendo a Documentação Atualizada

À medida que o projeto evolui, é essencial manter a documentação atualizada. Ao implementar uma história do Jira, siga estas práticas:

1. **Consulte a documentação existente** antes de iniciar a implementação
2. **Atualize a documentação** após concluir a implementação
3. **Adicione novas páginas** para funcionalidades ou componentes novos
4. **Mantenha a consistência** com os padrões de documentação existentes

Exemplo de atualização de documentação após implementação:

```javascript
// Atualizar documentação após implementar uma funcionalidade
const updateDocumentation = async (pageId, newContent) => {
  // Primeiro, obter a versão atual da página
  const currentPage = await confluenceMCP.get(`/content/${pageId}`);
  const newVersion = currentPage.version.number + 1;

  // Atualizar a página com o novo conteúdo
  await confluenceMCP.put(`/content/${pageId}`, {
    data: {
      version: {
        number: newVersion
      },
      title: currentPage.title,
      type: "page",
      body: {
        storage: {
          value: newContent,
          representation: "storage"
        }
      }
    }
  });
};
```

Esta documentação abrangente fornece uma base sólida para entender o projeto StayFocus, sua estrutura e como acessar a documentação técnica detalhada através do Confluence MCP. Utilize estas informações como referência ao implementar as histórias do projeto e manter a documentação atualizada.