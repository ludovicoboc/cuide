# Sprints 1-3: Infraestrutura e Migração Básica

Este documento detalha as primeiras 3 sprints do projeto, focadas na configuração da infraestrutura e migração básica do frontend para o backend Supabase.

## Sprint 1: Configuração do Supabase e Autenticação

**Duração**: 2 semanas  
**Objetivo**: Configurar o ambiente Supabase e implementar o sistema de autenticação básico.

### Tarefas

#### Configuração do Supabase
- [ ] Criar projeto no Supabase
- [ ] Configurar variáveis de ambiente
- [ ] Implementar as tabelas principais conforme `especif.md`:
  - `users` (extensão da tabela auth.users)
  - `user_preferences`
  - `refeicoes`
  - `hidratacao`
  - `notas_autoconhecimento`
  - `concursos`
  - `conteudo_programatico`

#### Implementação da Autenticação
- [ ] Configurar autenticação com email/senha
- [ ] Implementar integração com Google OAuth
- [ ] Criar páginas de login/registro
- [ ] Desenvolver componente de gerenciamento de sessão
- [ ] Implementar middleware de autenticação para rotas protegidas

#### Configuração do Ambiente de Desenvolvimento
- [ ] Atualizar dependências do projeto
- [ ] Configurar ESLint e Prettier para o novo código
- [ ] Criar estrutura de pastas para os novos serviços
- [ ] Implementar cliente Supabase tipado

### Entregáveis
- Sistema de autenticação funcional
- Esquema inicial do banco de dados no Supabase
- Documentação da estrutura do banco de dados

## Sprint 2: Migração das Stores Principais

**Duração**: 2 semanas  
**Objetivo**: Migrar as stores principais do Zustand para usar o Supabase como fonte de dados.

### Tarefas

#### Desenvolvimento de Serviços de API
- [ ] Criar serviço base para comunicação com Supabase
- [ ] Implementar serviço de perfil do usuário
- [ ] Desenvolver serviço para gerenciamento de preferências
- [ ] Criar serviço para alimentação (refeições e hidratação)
- [ ] Implementar serviço para autoconhecimento

#### Refatoração das Stores
- [ ] Refatorar `perfilStore` para usar o backend
- [ ] Adaptar `alimentacaoStore` para sincronizar com Supabase
- [ ] Modificar `autoconhecimentoStore` para persistência no backend
- [ ] Implementar cache local para funcionamento offline

#### Implementação de Hooks Personalizados
- [ ] Desenvolver hook `useAuth` para gerenciamento de autenticação
- [ ] Criar hook `useUser` para dados do usuário
- [ ] Implementar hook `useSupabaseQuery` para consultas tipadas

### Entregáveis
- Serviços de API para as entidades principais
- Stores refatoradas para usar o backend
- Hooks personalizados para facilitar o acesso aos dados

## Sprint 3: Migração das Stores Secundárias e Storage

**Duração**: 2 semanas  
**Objetivo**: Completar a migração das stores restantes e implementar o sistema de armazenamento.

### Tarefas

#### Migração das Stores Restantes
- [ ] Refatorar `concursosStore` para usar o backend
- [ ] Adaptar `hiperfocosStore` para sincronização com Supabase
- [ ] Modificar `sonoStore` para persistência no backend
- [ ] Implementar `financasStore` com suporte a transações no backend

#### Configuração do Supabase Storage
- [ ] Criar buckets para diferentes tipos de arquivos:
  - `profile-images`: Imagens de perfil
  - `meal-photos`: Fotos de refeições
  - `documents`: Documentos e materiais de estudo
  - `backups`: Arquivos de backup
- [ ] Implementar políticas de acesso para cada bucket
- [ ] Desenvolver serviço para upload/download de arquivos

#### Migração do Sistema de Backup
- [ ] Adaptar sistema atual de backup para usar Supabase
- [ ] Implementar versionamento de backups
- [ ] Criar interface para gerenciamento de backups

### Entregáveis
- Todas as stores principais migradas para o backend
- Sistema de armazenamento configurado e funcional
- Funcionalidade de backup/restauração adaptada para o novo backend

## Métricas de Sucesso

- **Cobertura da Migração**: 100% das stores principais migradas para o backend
- **Performance**: Tempo de resposta das operações CRUD abaixo de 300ms
- **Robustez**: Sistema funcional mesmo com conectividade intermitente
- **Segurança**: Todas as tabelas com políticas RLS adequadas implementadas

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Complexidade na migração de dados existentes | Média | Alto | Desenvolver scripts de migração e testes extensivos |
| Problemas de performance com Supabase | Baixa | Médio | Implementar estratégias de cache e monitoramento |
| Dificuldades com políticas RLS | Média | Alto | Começar com políticas simples e refinar incrementalmente |
| Resistência dos usuários à autenticação | Média | Médio | Oferecer migração suave e benefícios claros |

## Dependências

- Acesso ao projeto Supabase
- Configuração de variáveis de ambiente
- Documentação completa da estrutura de dados atual
