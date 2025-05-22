# Plano de Reestruturação do StayFocus

## Visão Geral
Este documento descreve o plano detalhado para reestruturar o código-fonte do StayFocus, alinhando-o com a arquitetura definida no `context.md` e considerando as sprints planejadas.

## Estrutura de Diretórios Proposta

```
src/
├── components/           # Componentes React organizados por domínio
│   ├── common/           # Componentes compartilhados
│   ├── alimentacao/      # Componentes de alimentação
│   ├── assistente/       # Componentes do assistente virtual
│   ├── autoconhecimento/ # Componentes de autoconhecimento
│   └── ...               # Outros domínios
├── services/             # Camada de serviços
│   ├── api/              # Serviços de API
│   ├── storage/          # Serviços de armazenamento
│   └── auth/             # Serviços de autenticação
├── stores/               # Gerenciamento de estado
│   ├── alimentacao/      # Stores de alimentação
│   ├── autoconhecimento/ # Stores de autoconhecimento
│   └── ...               # Outras stores
├── hooks/                # Hooks personalizados
├── lib/                  # Bibliotecas e utilitários
│   ├── assistente/       # Lógica do assistente
│   ├── maritaca/         # Integração Maritaca AI
│   └── supabase/         # Configuração do Supabase
├── utils/                # Funções utilitárias
├── types/                # Tipos TypeScript
└── styles/               # Estilos globais
```

## Cronograma de Implementação

### Fase 1: Preparação (2 dias)
- Configuração da estrutura de diretórios
- Atualização de configurações do projeto
- Configuração de aliases de importação

### Fase 2: Migração de Código (5 dias)
- **Dia 1-2**: Componentes da interface
- **Dia 3**: Serviços e API
- **Dia 4**: Gerenciamento de estado (stores)
- **Dia 5**: Hooks e utilitários

### Fase 3: Integração e Testes (3 dias)
- **Dia 1-2**: Integração com Supabase
- **Dia 3**: Testes automatizados

## Scripts de Apoio

### 1. Script de Migração
```javascript
// scripts/migrate.js
const fs = require('fs');
const path = require('path');

// Mapeamento de diretórios antigos para novos
const MAPPING = {
  'app/components': 'src/components',
  'app/hooks': 'src/hooks',
  // Adicione mais mapeamentos conforme necessário
};

// Implementação da lógica de migração
function migrateFile(sourcePath) {
  // Lógica para mover e atualizar arquivos
}
```

### 2. Script de Verificação de Estrutura
```bash
#!/bin/bash
# scripts/verify-structure.sh

# Verifica diretórios obrigatórios
declare -a required_dirs=(
  "src/components"
  "src/services"
  "src/stores"
  "src/hooks"
  "src/lib"
)

for dir in "${required_dirs[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "ERRO: Diretório $dir não encontrado"
    exit 1
  fi
done

echo "Estrutura verificada com sucesso!"
exit 0
```

## Boas Práticas Recomendadas

1. **Versionamento**
   - Commits atômicos e descritivos
   - Branches por funcionalidade
   - Pull requests com revisão obrigatória

2. **Qualidade de Código**
   - ESLint e Prettier configurados
   - Testes unitários e de integração
   - Documentação de componentes

3. **Documentação**
   - Atualizar README.md
   - Documentar estrutura de pastas
   - Manter guias de estilo atualizados

## Próximos Passos

1. Revisar o plano com a equipe
2. Criar branch de desenvolvimento
3. Iniciar migração por módulos
4. Testar cada módulo após migração

---
**Atualizado em**: 21/05/2025  
**Versão**: 1.0  
**Responsável**: Equipe de Desenvolvimento StayFocus
