This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
Documents/
  lista_paginas.md
  lista_stores_parte1.md
  lista_stores_parte2.md
  lista_stores_parte3.md
  lista_stores_parte4.md
  pagina_app_alimentacao_page.md
  pagina_app_autoconhecimento_page.md
  pagina_app_concursos_page.md
  pagina_app_estudos_materiais_page.md
  pagina_app_estudos_page.md
  pagina_app_estudos_simulado_page.md
  pagina_app_estudos_simulado-personalizado_page.md
  pagina_app_financas_page.md
  pagina_app_hiperfocos_page.md
  pagina_app_lazer_page.md
  pagina_app_page.md
  pagina_app_perfil_ajuda_page.md
  pagina_app_perfil_page.md
  pagina_app_receitas_adicionar_page.md
  pagina_app_receitas_lista-compras_page.md
  pagina_app_receitas_page.md
  pagina_app_roadmap_page.md
  pagina_app_saude_page.md
  pagina_app_sono_page.md
```

# Files

## File: Documents/lista_paginas.md
```markdown
# Lista de Páginas do Projeto

- app/page.tsx
- app/alimentacao/page.tsx
- app/autoconhecimento/page.tsx
- app/concursos/page.tsx
- app/estudos/page.tsx
- app/estudos/materiais/page.tsx
- app/estudos/simulado/page.tsx
- app/estudos/simulado-personalizado/page.tsx
- app/financas/page.tsx
- app/hiperfocos/page.tsx
- app/lazer/page.tsx
- app/perfil/page.tsx
- app/perfil/ajuda/page.tsx
- app/receitas/page.tsx
- app/receitas/adicionar/page.tsx
- app/receitas/lista-compras/page.tsx
- app/roadmap/page.tsx
- app/saude/page.tsx
- app/sono/page.tsx
```

## File: Documents/lista_stores_parte1.md
```markdown
# Lista de Stores (Parte 1)

- app/stores/alimentacaoStore.ts
- app/stores/atividadesStore.ts
- app/stores/autoconhecimentoStore.ts
- app/stores/concursosStore.ts
```

## File: Documents/lista_stores_parte2.md
```markdown
# Lista de Stores (Parte 2)

- app/stores/financasStore.ts
- app/stores/hiperfocosStore.ts
- app/stores/historicoSimuladosStore.ts
- app/stores/perfilStore.ts
```

## File: Documents/lista_stores_parte3.md
```markdown
# Lista de Stores (Parte 3)

- app/stores/pomodoroStore.ts
- app/stores/prioridadesStore.ts
- app/stores/questoesStore.ts
- app/stores/receitasStore.ts
```

## File: Documents/lista_stores_parte4.md
```markdown
# Lista de Stores (Parte 4)

- app/stores/registroEstudosStore.ts
- app/stores/simuladoStore.ts
- app/stores/sonoStore.ts
- app/stores/sugestoesStore.ts
```

## File: Documents/pagina_app_alimentacao_page.md
```markdown
# Descrição da Página: app/alimentacao/page.tsx

Esta página é dedicada ao gerenciamento e acompanhamento de aspectos relacionados à alimentação do usuário.

**Funcionalidades Principais:**

*   **Planejamento de Refeições:** Permite ao usuário planejar suas refeições.
*   **Registro de Refeições:** Oferece uma forma de registrar as refeições consumidas.
*   **Lembretes de Hidratação:** Ajuda o usuário a se manter hidratado com lembretes.
*   **Acesso às Receitas:** Contém um card que direciona o usuário para a seção "Minhas Receitas", onde ele pode organizar suas receitas, criar listas de compras e planejar refeições.

**Componentes Utilizados (Exemplos):**

*   `Card`: Componente genérico para exibir seções de conteúdo.
*   `PlanejadorRefeicoes`: Componente específico para o planejamento de refeições.
*   `RegistroRefeicoes`: Componente para o registro visual de refeições.
*   `LembreteHidratacao`: Componente para configurar e exibir lembretes de hidratação.
*   `Link` e `Button`: Para navegação para a página de receitas.

**Dados e Lógica:**

*   A página é primariamente estrutural, organizando os componentes relacionados à alimentação.
*   A lógica específica de cada funcionalidade (planejamento, registro, hidratação) reside nos componentes importados.
```

## File: Documents/pagina_app_autoconhecimento_page.md
```markdown
# Descrição da Página: app/autoconhecimento/page.tsx

Esta página é dedicada a auxiliar o usuário no processo de autoconhecimento, permitindo o registro e organização de reflexões pessoais.

**Funcionalidades Principais:**

*   **Organização por Abas:** As notas são categorizadas em três seções principais para facilitar a organização:
    *   **Quem sou:** Para registrar preferências, aversões e características pessoais.
    *   **Meus porquês:** Para documentar motivações e valores fundamentais.
    *   **Meus padrões:** Para anotar reações emocionais típicas e estratégias de enfrentamento.
*   **Criação e Edição de Notas:** O usuário pode criar novas notas dentro de cada seção ou editar notas existentes. Um editor de texto é fornecido para inserir o conteúdo.
*   **Listagem de Notas:** As notas criadas em cada seção são listadas, permitindo ao usuário visualizá-las e selecionar uma para edição.
*   **Modo Refúgio:** A página oferece um "Modo Refúgio", que provavelmente simplifica a interface para um ambiente de escrita mais focado e com menos distrações.
*   **Interface Dinâmica:** A visualização da página se adapta dependendo se o usuário está visualizando a lista de notas, criando uma nova nota ou editando uma existente. Em telas maiores, a lista de notas e o editor podem ser exibidos lado a lado.

**Componentes Utilizados (Exemplos):**

*   `EditorNotas`: Componente para a entrada e edição do conteúdo das notas.
*   `ListaNotas`: Exibe as notas de uma determinada seção e permite a seleção ou adição de novas notas.
*   `ModoRefugio`: Componente que ativa/desativa a interface simplificada.
*   Abas de navegação para alternar entre as seções "Quem sou", "Meus porquês" e "Meus padrões".
*   Botões para criar nova nota, salvar, cancelar edição.

**Dados e Lógica:**

*   Gerencia o estado da aba selecionada, a nota atualmente selecionada para edição e se o usuário está no processo de criar uma nova nota.
*   Utiliza o `useAutoconhecimentoStore` para acessar o estado do `modoRefugio`.
*   A lógica de salvar, carregar e deletar notas provavelmente reside dentro dos componentes `EditorNotas` e `ListaNotas`, que interagem com o store ou um serviço de dados.
```

## File: Documents/pagina_app_concursos_page.md
```markdown
# Descrição da Página: app/concursos/page.tsx

Esta página é a central de gerenciamento de concursos para o usuário, permitindo adicionar, visualizar e acompanhar o progresso nos estudos para diferentes certames.

**Funcionalidades Principais:**

*   **Listagem de Concursos:** Exibe os concursos cadastrados pelo usuário em formato de cards. Cada card mostra:
    *   Título do concurso.
    *   Organizadora.
    *   Status atual do concurso (ex: Planejado, Inscrito, Estudando, Realizado, Aguardando Resultado), com cores distintas para fácil identificação.
    *   Data da prova.
    *   Barra de progresso geral dos estudos para o conteúdo programático.
    *   Link para ver detalhes do concurso.
*   **Adicionar Concurso Manualmente:** Permite ao usuário cadastrar um novo concurso preenchendo um formulário (`ConcursoForm`).
*   **Importar Concurso via JSON:** Oferece a funcionalidade de importar os dados de um concurso a partir de um arquivo JSON, provavelmente contendo informações do edital. Após a importação, o usuário é redirecionado para a página de detalhes do concurso importado.
*   **Visualização Condicional:** Se nenhum concurso estiver cadastrado, uma mensagem informativa é exibida.

**Componentes Utilizados (Exemplos):**

*   `Card`: Para exibir as informações de cada concurso.
*   `Button`: Para ações como "Adicionar Manualmente", "Importar JSON" e "Ver detalhes".
*   `ConcursoForm`: Modal ou formulário para o cadastro manual de novos concursos.
*   `ImportarConcursoJsonModal`: Modal para o upload e processamento do arquivo JSON do edital.
*   Ícones (`Award`, `Calendar`, `Plus`, `Upload`): Para melhorar a interface visual.

**Dados e Lógica:**

*   Utiliza o `useConcursosStore` para buscar a lista de concursos e adicionar novos.
*   Gerencia o estado de exibição dos modais de adição manual (`showAddModal`) e importação (`showImportModal`).
*   Formata a data da prova utilizando `date-fns` com localização para `ptBR`.
*   Calcula o progresso geral dos estudos com base no `conteudoProgramatico` de cada concurso.
*   Define mapeamentos para `statusLabel` (rótulos dos status em português) e `statusColors` (cores de fundo e texto para cada status).
*   A função `handleImportConcurso` processa o concurso importado, gera um ID, define um status inicial e o adiciona ao store, redirecionando o usuário em seguida.
*   Utiliza `next/navigation` (`useRouter`) para redirecionamento após a importação.
```

## File: Documents/pagina_app_estudos_materiais_page.md
```markdown
# Descrição da Página: app/estudos/materiais/page.tsx

Esta página permite ao usuário acessar e visualizar seus materiais de estudo, que estão organizados por tipo e armazenados externamente (provavelmente no Google Drive).

**Funcionalidades Principais:**

*   **Seleção de Tipo de Material:** Apresenta uma lista de tipos de materiais de estudo (Resumos, Flashcards, Simulados, Tarefas, etc.) em botões.
*   **Busca de Arquivos no Drive:**
    *   Ao selecionar um tipo de material, o sistema solicita ao usuário o ID da pasta correspondente no Google Drive através de um `prompt`.
    *   Com o ID da pasta, a página faz uma requisição à API (`/api/drive/listar-materiais?folderId=...`) para listar os arquivos dentro dessa pasta.
    *   Os arquivos retornados são filtrados para incluir apenas aqueles cujo nome contém o tipo de material selecionado (case-insensitive).
*   **Seleção de Arquivo Específico:**
    *   Se a busca retornar múltiplos arquivos correspondentes, um modal (`isFileListModalOpen`) é exibido, listando os arquivos para que o usuário escolha qual visualizar.
    *   Se apenas um arquivo for encontrado, ele é selecionado automaticamente para visualização.
    *   Se nenhum arquivo for encontrado, uma mensagem de alerta é exibida.
*   **Visualização de Material:**
    *   O arquivo selecionado é exibido em um modal de visualização (`isVisualizationModalOpen`).
    *   Se o tipo de material for "Checklists", o componente `VisualizadorChecklist` é usado.
    *   Para outros tipos de material, o componente `VisualizadorMarkdown` é utilizado.
    *   O título do modal de visualização inclui o tipo de material e o nome do arquivo.

**Componentes Utilizados (Exemplos):**

*   `Card`: Para agrupar os botões de tipos de materiais.
*   `Button`: Para selecionar tipos de materiais e arquivos específicos.
*   `Modal`: Para exibir a lista de arquivos para seleção e para visualizar o conteúdo do material.
*   `VisualizadorMarkdown`: Para renderizar conteúdo Markdown.
*   `VisualizadorChecklist`: Para renderizar checklists.
*   `Input`: (Embora importado, não parece ser usado diretamente no JSX principal, mas pode ser parte de um componente interno ou lógica futura).

**Dados e Lógica:**

*   Mantém uma lista estática `materialTypes` com os tipos de materiais disponíveis.
*   Gerencia diversos estados:
    *   `isFileListModalOpen`: Controla a visibilidade do modal de seleção de arquivos.
    *   `filesForSelection`: Armazena a lista de arquivos retornados pela API para seleção.
    *   `selectedMaterialType`: Armazena o tipo de material atualmente selecionado.
    *   `isVisualizationModalOpen`: Controla a visibilidade do modal de visualização de material.
    *   `selectedFileId`: Armazena o ID do arquivo selecionado para visualização.
    *   `modalTitle`: Armazena o título para os modais.
*   A função `handleSelectMaterialType` é acionada ao clicar em um tipo de material, solicita o ID da pasta, busca os arquivos na API, filtra-os e decide se mostra a lista de seleção ou abre a visualização diretamente.
*   A função `handleFileSelection` é chamada quando um arquivo é selecionado na lista, atualizando o estado para abrir o modal de visualização.
*   A função `handleCloseVisualizationModal` fecha o modal de visualização e reseta os estados relevantes.
*   Interage com uma API backend (`/api/drive/listar-materiais`) para buscar os arquivos do Google Drive.
```

## File: Documents/pagina_app_estudos_page.md
```markdown
# Descrição da Página: app/estudos/page.tsx

Esta página centraliza as ferramentas e informações para auxiliar o usuário em suas sessões de estudo.

**Funcionalidades Principais:**

*   **Temporizador Pomodoro:** Integra um temporizador Pomodoro para gerenciamento do tempo de estudo e pausas.
*   **Registro de Estudos:** Permite ao usuário registrar suas sessões de estudo, possivelmente para acompanhamento de progresso e dedicação.
*   **Informações do Próximo Concurso:** Exibe um card com detalhes do próximo concurso planejado (título, organizadora, data da prova, progresso de estudos), com link para a página de detalhes do concurso. Se nenhum concurso estiver planejado, oferece um link para adicionar um.
*   **Acesso a Materiais de Estudo:** Apresenta uma seção com botões para diferentes tipos de materiais de estudo (Resumos, Flashcards, Simulados, Tarefas, Estratégias de Foco, Agendamento de Pausas, Mapas Mentais, Outlines de Infográficos, Checklists, Guias de Estudo).
    *   Ao clicar em um tipo de material, a página busca arquivos correspondentes (provavelmente de um serviço de armazenamento como Google Drive, via API `/api/drive/listar-materiais`).
    *   Se múltiplos arquivos forem encontrados, um modal (`isFileListModalOpen`) é exibido para o usuário selecionar o arquivo desejado.
    *   Se apenas um arquivo for encontrado, ele é aberto diretamente.
    *   O conteúdo do arquivo selecionado (Markdown ou Checklist) é exibido em um modal de visualização (`isVisualizationModalOpen`), utilizando os componentes `VisualizadorMarkdown` ou `VisualizadorChecklist`.
*   **Navegação Rápida:** Contém botões para navegar para a página de "Simulado", "Ver Todos Concursos" e "Acesso a matérias de estudos" (que parece ser a página `/estudos/materiais`).

**Componentes Utilizados (Exemplos):**

*   `Card`: Para organizar as seções da página.
*   `Button`: Para navegação e seleção de materiais.
*   `Modal`: Para exibir a lista de arquivos e os visualizadores de conteúdo.
*   `TemporizadorPomodoro`: Componente do temporizador.
*   `RegistroEstudos`: Componente para registrar sessões de estudo.
*   `VisualizadorMarkdown`: Para renderizar conteúdo Markdown.
*   `VisualizadorChecklist`: Para renderizar checklists.
*   `Link`: Para navegação entre páginas.

**Dados e Lógica:**

*   Utiliza `useConcursosStore` para obter a lista de concursos e identificar o próximo.
*   Gerencia estados para:
    *   ID do arquivo selecionado (`selectedFileId`).
    *   Título do modal de visualização (`modalTitle`).
    *   Visibilidade do modal de visualização (`isVisualizationModalOpen`).
    *   Visibilidade do modal de listagem de arquivos (`isFileListModalOpen`).
    *   Lista de arquivos para seleção (`filesForSelection`).
    *   Tipo de material selecionado (`selectedMaterialType`).
*   A função `handleSelectMaterialType` busca os arquivos do tipo selecionado via API e decide se abre um arquivo diretamente ou mostra a lista para seleção.
*   A função `handleFileSelection` define o arquivo selecionado da lista e abre o modal de visualização.
*   A função `handleCloseVisualizationModal` fecha o modal de visualização e reseta os estados relacionados.
*   Formata datas usando `date-fns` com localização `ptBR`.
*   Calcula o progresso de estudos para o próximo concurso.
```

## File: Documents/pagina_app_estudos_simulado_page.md
```markdown
# Descrição da Página: app/estudos/simulado/page.tsx

Esta página é dedicada à realização e conferência de simulados. Ela gerencia o fluxo de um simulado, desde o carregamento das questões até a exibição dos resultados e revisão.

**Funcionalidades Principais:**

*   **Carregamento de Simulado:** Inicialmente, apresenta uma interface para carregar um simulado (componente `SimuladoLoader`). Isso provavelmente envolve selecionar um arquivo de simulado ou configurar um novo.
*   **Revisão do Simulado:** Após o carregamento ou durante a realização, permite a revisão das questões (componente `SimuladoReview`).
*   **Exibição de Resultados:** Ao finalizar o simulado, mostra os resultados obtidos pelo usuário (componente `SimuladoResults`).
*   **Histórico de Simulados:** Permite ao usuário visualizar um histórico de simulados realizados através de um modal (componente `HistoricoModal`).
*   **Reiniciar/Carregar Novo Simulado:** Oferece um botão para "Carregar Novo", que reseta o estado atual do simulado (via `resetSimulado` do store) e volta para a tela de carregamento, permitindo iniciar um novo simulado. Este botão só aparece se o status não for 'idle'.

**Componentes Utilizados (Exemplos):**

*   `SimuladoLoader`: Interface para iniciar ou carregar um simulado.
*   `SimuladoReview`: Interface para responder ou revisar as questões do simulado.
*   `SimuladoResults`: Interface para exibir o desempenho no simulado.
*   `HistoricoModal`: Modal para exibir o histórico de simulados anteriores.
*   `Container`: Componente de layout para envolver o conteúdo da página.
*   `Button`: Para ações como "Histórico" e "Carregar Novo".
*   Ícone `History`: Usado no botão de histórico.

**Dados e Lógica:**

*   Utiliza o `useSimuladoStore` para gerenciar o estado do simulado (`status`, `resetSimulado`). O `status` pode ser:
    *   `idle`: Estado inicial, esperando o carregamento de um simulado.
    *   `loading`: Carregando dados do simulado.
    *   `reviewing`: Em processo de realização/revisão do simulado.
    *   `results`: Exibindo os resultados do simulado.
*   A função `renderContent` decide qual componente (`SimuladoLoader`, `SimuladoReview`, `SimuladoResults` ou uma mensagem de carregamento) exibir com base no `status` atual do simulado.
*   Gerencia o estado `isHistoricoOpen` para controlar a visibilidade do modal de histórico.
```

## File: Documents/pagina_app_estudos_simulado-personalizado_page.md
```markdown
# Descrição da Página: app/estudos/simulado-personalizado/page.tsx

Esta página é responsável por carregar e exibir um simulado personalizado, montado a partir de questões previamente selecionadas pelo usuário e armazenadas no `localStorage`.

**Funcionalidades Principais:**

*   **Carregamento de Questões Personalizadas:**
    *   Ao carregar a página, ela tenta buscar um item chamado `simulado_personalizado_questoes` do `localStorage`.
    *   Se encontrado, o conteúdo (que se espera ser um JSON de um array de questões) é parseado.
    *   As questões recuperadas são então transformadas e adaptadas para a estrutura de dados esperada pelo `simuladoStore` e pelo componente `SimuladoReview`. Isso inclui:
        *   Criar metadados básicos para o simulado (título, total de questões, data de geração, ID do concurso da primeira questão).
        *   Mapear os campos de cada questão (enunciado, alternativas, gabarito, assunto, dificuldade, explicação) para o formato do store.
        *   Converter as alternativas de um array para um objeto com chaves 'a', 'b', 'c', etc.
        *   Identificar a chave da alternativa correta para o campo `gabarito`.
    *   Após a transformação, os dados do simulado são carregados no `simuladoStore` usando a função `loadSimulado`.
*   **Exibição do Simulado:**
    *   Se os dados do simulado (`simuladoData` do store) ainda não estiverem carregados, uma mensagem "Carregando simulado personalizado..." é exibida.
    *   Uma vez que `simuladoData` esteja disponível, o componente `SimuladoReview` é renderizado, permitindo ao usuário interagir com o simulado personalizado (responder às questões, revisar, etc.).

**Componentes Utilizados (Exemplos):**

*   `SimuladoReview`: O principal componente para a interface de realização/revisão do simulado.

**Dados e Lógica:**

*   Utiliza o `useSimuladoStore` para carregar os dados do simulado personalizado (`loadSimulado`) e para verificar se os dados já foram carregados (`simuladoData`).
*   A lógica principal reside no `useEffect` hook, que é executado uma vez quando a página monta:
    *   Lê dados do `localStorage`.
    *   Faz o parsing e a transformação dos dados das questões.
    *   Chama `loadSimulado` para popular o store.
*   Não há interface para *selecionar* as questões nesta página; presume-se que a seleção e o armazenamento no `localStorage` ocorrem em outra parte da aplicação (provavelmente na página de detalhes de um concurso ou em uma seção de banco de questões).
*   Se houver erro ao parsear os dados do `localStorage` ou se não houver questões, a página pode não carregar o simulado corretamente, mas o `useEffect` tenta tratar erros de parse silenciosamente.
```

## File: Documents/pagina_app_financas_page.md
```markdown
# Descrição da Página: app/financas/page.tsx

Esta página é dedicada ao gerenciamento financeiro do usuário, oferecendo ferramentas para rastrear gastos, organizar orçamentos e visualizar pagamentos.

**Funcionalidades Principais:**

*   **Rastreador de Gastos:** Exibe um componente para rastrear e visualizar os gastos. Este componente (`RastreadorGastos`) é carregado dinamicamente (client-side only) para evitar problemas com bibliotecas de gráficos (como `recharts`) que dependem de APIs do navegador. Uma mensagem "Carregando gráfico..." é exibida durante o carregamento.
*   **Envelopes Virtuais:** Permite ao usuário organizar seu orçamento utilizando o método de envelopes virtuais (componente `EnvelopesVirtuais`).
*   **Calendário de Pagamentos:** Apresenta um calendário para que o usuário possa visualizar e gerenciar seus pagamentos agendados (componente `CalendarioPagamentos`).
*   **Adicionar Despesa Rápida:** Oferece um formulário ou interface simplificada para adicionar novas despesas rapidamente (componente `AdicionarDespesa`).

**Componentes Utilizados (Exemplos):**

*   `Card`: Para organizar cada seção da página de finanças.
*   `RastreadorGastos`: Componente para visualização e gerenciamento de gastos (carregado dinamicamente).
*   `EnvelopesVirtuais`: Componente para o sistema de orçamento por envelopes.
*   `CalendarioPagamentos`: Componente para exibir e gerenciar o calendário de pagamentos.
*   `AdicionarDespesa`: Componente para o registro rápido de despesas.

**Dados e Lógica:**

*   A página estrutura a apresentação dos diferentes componentes de finanças.
*   A principal lógica específica de cada funcionalidade (rastreamento, envelopes, calendário, adição de despesa) reside nos componentes importados.
*   Utiliza `next/dynamic` para importar o componente `RastreadorGastos` apenas no lado do cliente (`ssr: false`), o que é uma prática comum para componentes que utilizam bibliotecas de gráficos que manipulam o DOM diretamente.
```

## File: Documents/pagina_app_hiperfocos_page.md
```markdown
# Descrição da Página: app/hiperfocos/page.tsx

Esta página é projetada para ajudar usuários a gerenciar seus "hiperfocos" — interesses intensos — transformando-os em projetos estruturados e auxiliando na gestão de transições de foco.

**Funcionalidades Principais:**

*   **Navegação por Abas:** A interface é organizada em quatro abas principais para diferentes funcionalidades:
    *   **Conversor de Interesses:** Provavelmente uma ferramenta para ajudar a transformar um interesse bruto em um projeto mais definido (componente `ConversorInteresses`).
    *   **Sistema de Alternância:** Pode oferecer estratégias ou ferramentas para ajudar o usuário a alternar entre diferentes focos ou tarefas (componente `SistemaAlternancia`).
    *   **Estrutura de Projetos:** Uma ferramenta para visualizar e organizar os projetos de hiperfoco (componente `VisualizadorProjetos`).
    *   **Temporizador:** Um temporizador de foco, possivelmente similar ao Pomodoro, mas adaptado para hiperfocos (componente `TemporizadorFoco`).
*   **Resumo dos Hiperfocos:** Se houver projetos de hiperfoco cadastrados, um card de resumo é exibido abaixo das abas. Este resumo lista cada projeto com:
    *   Título do projeto (com uma cor associada).
    *   Contagem de tarefas concluídas em relação ao total de tarefas do projeto.

**Componentes Utilizados (Exemplos):**

*   `ConversorInteresses`: Ferramenta para converter interesses em projetos.
*   `SistemaAlternancia`: Ferramenta para gerenciar a alternância de foco.
*   `VisualizadorProjetos`: Para visualizar a estrutura dos projetos de hiperfoco.
*   `TemporizadorFoco`: Temporizador específico para sessões de hiperfoco.
*   Botões de navegação para alternar entre as abas.

**Dados e Lógica:**

*   Utiliza o `useHiperfocosStore` para acessar a lista de `hiperfocoProjetos` e `hiperfocoTarefas`.
*   Gerencia o estado da `tabAtiva` para controlar qual componente de funcionalidade é exibido.
*   No card de resumo, para cada projeto, filtra as tarefas associadas a ele a partir do `hiperfocoTarefas` no store e calcula o número de tarefas concluídas e o total de tarefas.
*   A cor de fundo do item do projeto no resumo é dinamicamente definida com base na `cor` do projeto, com uma transparência aplicada (`${hiperfoco.cor}20`).
```

## File: Documents/pagina_app_lazer_page.md
```markdown
# Descrição da Página: app/lazer/page.tsx

Esta página é focada em ajudar o usuário a gerenciar seu tempo de lazer e encontrar atividades relaxantes.

**Funcionalidades Principais:**

*   **Temporizador de Lazer:** Inclui um temporizador específico para atividades de lazer (componente `TemporizadorLazer`), permitindo ao usuário controlar o tempo dedicado ao descanso e entretenimento.
*   **Atividades de Lazer:** Apresenta uma seção para listar ou sugerir atividades de lazer (componente `AtividadesLazer`).
*   **Sugestões de Descanso:** Oferece sugestões de formas de descanso e relaxamento (componente `SugestoesDescanso`).

**Componentes Utilizados (Exemplos):**

*   `Card`: Para organizar cada seção da página (Temporizador, Atividades, Sugestões).
*   `TemporizadorLazer`: Componente do temporizador específico para lazer.
*   `AtividadesLazer`: Componente para exibir ou gerenciar atividades de lazer.
*   `SugestoesDescanso`: Componente para fornecer sugestões de descanso.

**Dados e Lógica:**

*   A página atua principalmente como um contêiner para os componentes relacionados ao lazer.
*   A lógica específica de cada funcionalidade (temporizador, listagem de atividades, sugestões) reside nos respectivos componentes importados.
```

## File: Documents/pagina_app_page.md
```markdown
# Descrição da Página: app/page.tsx

Esta é a página inicial da aplicação, funcionando como um dashboard central para o usuário.

**Funcionalidades Principais:**

*   **Visão Geral do Dia:** Apresenta um painel visual com informações relevantes para o dia do usuário.
*   **Gerenciamento de Tarefas:** Exibe uma lista de prioridades diárias e permite o acompanhamento de um checklist de medicamentos.
*   **Lembretes e Avisos:** Mostra lembretes para pausas e informações sobre a próxima prova agendada (se houver pausas configuradas para serem exibidas).
*   **Resumo de Atividades:** Fornece um resumo quantitativo de prioridades pendentes, prioridades concluídas e o número de próximos compromissos.
*   **Navegação Rápida:** Oferece links de acesso rápido para seções importantes da aplicação, como "Estudos", "Saúde", "Hiperfocos" e "Lazer".
*   **Personalização Visual:** Aplica automaticamente as preferências visuais definidas pelo usuário, como aumento do tamanho do texto, modo de alto contraste e redução de animações/estímulos, visando melhorar a acessibilidade e a experiência de uso.
*   **Carregamento Progressivo:** Utiliza componentes de carregamento (placeholders) enquanto os dados principais do dashboard estão sendo buscados, melhorando a percepção de performance.

**Componentes Utilizados (Exemplos):**

*   `DashboardHeader`: Cabeçalho da página.
*   `DashboardSummary`: Resumo das atividades.
*   `PainelDia`: Componente visual do dia.
*   `ListaPrioridades`: Lista de tarefas prioritárias.
*   `ChecklistMedicamentos`: Checklist para medicamentos.
*   `LembretePausas`: Lembretes para descanso.
*   `ProximaProvaCard`: Card com informações da próxima prova.
*   Links para outras seções (`/estudos`, `/saude`, etc.).

**Dados e Lógica:**

*   Utiliza o hook `useDashboard` para buscar e gerenciar os dados exibidos no dashboard.
*   Aplica dinamicamente classes CSS ao `document.documentElement` com base nas `preferenciasVisuais` do usuário.
```

## File: Documents/pagina_app_perfil_ajuda_page.md
```markdown
# Descrição da Página: app/perfil/ajuda/page.tsx

Esta página serve como um guia de ajuda detalhado para os usuários, explicando duas funcionalidades principais: a importação/exportação de dados do aplicativo e a criação de simulados utilizando Inteligência Artificial (IA).

**Funcionalidades Principais:**

*   **Navegação:**
    *   Inclui um link "Voltar para Perfil" para fácil navegação de retorno à página de perfil.
*   **Seção de Ajuda para Importação/Exportação de Dados:**
    *   **Exportação:**
        *   Explica o propósito da exportação (backup, transferência de dados).
        *   Fornece um passo a passo de como exportar dados (ir ao Perfil, localizar seção, clicar em "Exportar Dados").
        *   Informa o nome do arquivo gerado (`stayfocus_backup_DATA.json`).
        *   Recomenda backups regulares.
    *   **Importação:**
        *   Explica que a importação substitui os dados atuais.
        *   Fornece um passo a passo de como importar dados (ir ao Perfil, localizar seção, clicar em "Importar Dados", selecionar arquivo, confirmar).
        *   Alerta sobre a substituição dos dados e a irreversibilidade da ação, sugerindo exportar dados atuais antes de importar.
    *   **Perguntas Frequentes (FAQ):**
        *   Aborda o que acontece com os dados atuais ao importar.
        *   Confirma a possibilidade de transferir dados entre dispositivos.
        *   Discute a segurança do arquivo de backup.
        *   Menciona a compatibilidade de backups com futuras versões do aplicativo.
*   **Seção de Ajuda para Criação de Simulados com IA:**
    *   Explica que LLMs (Claude, ChatGPT, Gemini, etc.) podem ser usados para gerar arquivos de simulado.
    *   **Passo 1: Copiar Estrutura JSON:**
        *   Fornece um modelo JSON completo que a IA deve seguir para criar o simulado.
        *   Destaca os campos obrigatórios (`titulo`, `totalQuestoes`, `id` da questão, `enunciado`, `alternativas`, `gabarito`).
    *   **Passo 2: Preparar Conteúdo (Opcional):**
        *   Sugere copiar o material de estudo para um arquivo `.txt` para fornecer à IA.
    *   **Passo 3: Criar Prompt para IA:**
        *   Instrui sobre como criar um prompt claro para a IA.
        *   Fornece um exemplo de prompt, incluindo placeholders para número de questões, tópico e a instrução para colar a estrutura JSON.
    *   **Passo 4: Usar JSON Gerado no StayFocus:**
        *   Explica como copiar o JSON da IA.
        *   Descreve duas opções para carregar o simulado no StayFocus:
            1.  Colar o texto JSON diretamente na interface de carregamento de simulado.
            2.  Salvar o JSON como um arquivo `.json` e carregá-lo.
    *   **Alerta de Revisão:** Enfatiza a importância de revisar o conteúdo gerado pela IA (questões, alternativas, gabarito, formatação JSON) devido à possibilidade de erros.

**Componentes Utilizados (Exemplos):**

*   Ícones da biblioteca `lucide-react` (`ArrowLeft`, `HelpCircle`, `FileDown`, `FileUp`, `AlertTriangle`).
*   Um ícone SVG customizado para "Brain Circuit" na seção de IA.
*   `Link` do Next.js para navegação.
*   Estrutura de formatação de texto (títulos, parágrafos, listas ordenadas, blocos de citação, blocos de código `pre`/`code`) para apresentar as informações de ajuda de forma clara.

**Dados e Lógica:**

*   A página é primariamente estática, contendo texto informativo e instruções.
*   Não há interações complexas com stores ou APIs, exceto pela navegação.
*   O foco é fornecer um guia compreensível para o usuário.
```

## File: Documents/pagina_app_perfil_page.md
```markdown
# Descrição da Página: app/perfil/page.tsx

Esta página permite ao usuário visualizar e gerenciar suas informações pessoais, metas diárias, preferências visuais e realizar operações de exportação/importação de dados.

**Funcionalidades Principais:**

*   **Informações Pessoais:** Exibe e permite a edição das informações pessoais do usuário (componente `InformacoesPessoais`).
*   **Metas Diárias:** Permite ao usuário definir e acompanhar suas metas diárias (componente `MetasDiarias`).
*   **Preferências Visuais:** Oferece opções para o usuário personalizar a aparência da aplicação, como:
    *   Alto Contraste
    *   Redução de Estímulos
    *   Texto Grande
    (componente `PreferenciasVisuais`). As classes CSS correspondentes (`alto-contraste`, `reducao-estimulos`, `texto-grande`) são aplicadas dinamicamente ao elemento `<html>` com base nas seleções.
*   **Exportar/Importar Dados:** Fornece funcionalidade para exportar os dados do usuário e importar dados previamente exportados (componente `ExportarImportarDados`).
*   **Redefinir Configurações:** Um botão "Redefinir" permite ao usuário restaurar todas as suas preferências, metas e configurações para os valores padrão. Uma modal de confirmação (`resetConfirmOpen`) é exibida para evitar redefinições acidentais.

**Componentes Utilizados (Exemplos):**

*   `InformacoesPessoais`: Formulário ou seção para dados pessoais.
*   `MetasDiarias`: Interface para gerenciamento de metas diárias.
*   `PreferenciasVisuais`: Controles para as opções de acessibilidade visual.
*   `ExportarImportarDados`: Interface para exportação e importação de dados.
*   Ícones `User` e `RefreshCw` da biblioteca `lucide-react`.
*   Modal de confirmação para a ação de redefinir.

**Dados e Lógica:**

*   Utiliza o `usePerfilStore` para acessar e modificar os dados do perfil do usuário (`perfilStore.perfil`, `perfilStore.resetarPerfilLocal()`).
*   Um `useEffect` hook é responsável por aplicar as classes de preferência visual ao `document.documentElement` quando a página carrega e também por removê-las quando o componente é desmontado (cleanup).
*   Gerencia o estado `resetConfirmOpen` para controlar a visibilidade do modal de confirmação de redefinição.
*   A função `confirmarReset` chama `perfilStore.resetarPerfilLocal()` para efetivar a redefinição e fecha o modal.
*   Se `perfilStore.perfil` for nulo inicialmente, um objeto de perfil padrão com `preferenciasVisuais` básicas é usado para evitar erros.
```

## File: Documents/pagina_app_receitas_adicionar_page.md
```markdown
# Descrição da Página: app/receitas/adicionar/page.tsx

Esta página é dedicada exclusivamente a permitir que o usuário adicione uma nova receita ao sistema.

**Funcionalidades Principais:**

*   **Formulário de Nova Receita:** A página renderiza o componente `AdicionarReceitaForm`. Como nenhuma propriedade `receitaParaEditar` é passada para este componente, ele é inicializado como um formulário em branco, pronto para a entrada de dados de uma nova receita.

**Componentes Utilizados (Exemplos):**

*   `AdicionarReceitaForm`: O componente que contém todos os campos e a lógica para coletar as informações de uma nova receita (nome, ingredientes, modo de preparo, categorias, etc.) e salvá-la.

**Dados e Lógica:**

*   A página em si é muito simples e atua como um invólucro para o `AdicionarReceitaForm`.
*   Toda a lógica de manipulação do formulário, validação de dados e submissão para salvar a nova receita reside dentro do componente `AdicionarReceitaForm`.
```

## File: Documents/pagina_app_receitas_lista-compras_page.md
```markdown
# Descrição da Página: app/receitas/lista-compras/page.tsx

Esta página é designada para exibir e gerenciar a lista de compras do usuário, provavelmente gerada a partir das receitas selecionadas ou ingredientes adicionados manualmente.

**Funcionalidades Principais:**

*   **Exibição da Lista de Compras:** A página renderiza o componente `ListaCompras`, que é responsável por mostrar todos os itens que o usuário precisa comprar.

**Componentes Utilizados (Exemplos):**

*   `ListaCompras`: O componente central que contém a lógica para buscar, exibir, e possivelmente permitir interações com os itens da lista de compras (como marcar itens como comprados, adicionar novos itens, remover itens, etc.).

**Dados e Lógica:**

*   A página em si é um contêiner simples para o componente `ListaCompras`.
*   Toda a lógica de gerenciamento da lista de compras (agregação de ingredientes de receitas, adição manual, remoção, marcação de status) reside dentro do componente `ListaCompras` e, possivelmente, interage com o `receitasStore` ou um store específico para a lista de compras.
```

## File: Documents/pagina_app_receitas_page.md
```markdown
# Descrição da Página: app/receitas/page.tsx

Esta página serve como a interface principal para o usuário gerenciar e visualizar suas receitas.

**Funcionalidades Principais:**

*   **Listagem de Receitas:** Exibe uma lista de receitas cadastradas (componente `ListaReceitas`).
*   **Adicionar Nova Receita:** Contém um botão que redireciona o usuário para a página de adicionar nova receita (`/receitas/adicionar`).
*   **Importador de Receitas:** Inclui um componente (`ImportadorReceitas`) que permite ao usuário importar receitas, provavelmente de um formato de arquivo específico ou URL.
*   **Pesquisa de Receitas:**
    *   Um campo de pesquisa (`Pesquisa`) permite ao usuário buscar receitas por nome ou por ingredientes.
    *   A pesquisa é case-insensitive.
*   **Filtro por Categorias:**
    *   Um seletor de categorias (`FiltroCategorias`) permite filtrar as receitas exibidas.
    *   O filtro pode ser "todas" ou uma categoria específica.
*   **Acesso à Lista de Compras:** Um botão redireciona para a página da lista de compras (`/receitas/lista-compras`).
*   **Filtragem Combinada:** As receitas exibidas são o resultado da combinação do filtro de categoria e do termo de pesquisa.

**Componentes Utilizados (Exemplos):**

*   `ListaReceitas`: Para exibir os cards ou itens de receita.
*   `FiltroCategorias`: Dropdown ou seletor para as categorias de receitas.
*   `Pesquisa`: Campo de input para busca textual.
*   `Button`: Para "Adicionar Nova Receita" e "Lista de Compras".
*   `Link`: Para navegação para outras páginas de receitas.
*   `ImportadorReceitas`: Componente para a funcionalidade de importação.

**Dados e Lógica:**

*   Utiliza o `useReceitasStore` para obter a lista completa de `receitas`.
*   Gerencia os estados locais:
    *   `filtroCategoria`: Armazena a categoria atualmente selecionada para filtro.
    *   `termoPesquisa`: Armazena o texto digitado no campo de pesquisa.
*   A lógica de `receitasFiltradas` combina os dois filtros:
    1.  Filtra por categoria (se não for "todas").
    2.  Filtra o resultado anterior pelo `termoPesquisa`, verificando se o termo (em minúsculas) está presente no nome da receita (em minúsculas) ou no nome de algum dos ingredientes (em minúsculas).
    *   O código comentado sugere que a pesquisa poderia ser estendida para incluir descrições e tags.
*   Passa as `receitasFiltradas` para o componente `ListaReceitas` para renderização.
```

## File: Documents/pagina_app_roadmap_page.md
```markdown
# Descrição da Página: app/roadmap/page.tsx

Esta página apresenta o roadmap de desenvolvimento do aplicativo "StayFocus", detalhando o conceito por trás do projeto, as funcionalidades já implementadas em sprints anteriores e os planos para sprints futuros.

**Funcionalidades Principais:**

*   **Apresentação do Conceito:**
    *   Explica a motivação para a criação do StayFocus (experiência pessoal com TDAH).
    *   Destaca os princípios de design: simplicidade, clareza visual, adaptabilidade e persistência.
*   **Detalhes das Sprints de Desenvolvimento:**
    *   **Sprint 1 (Concluído):**
        *   Página Inicial (Painel do Dia, Lista de Prioridades, Lembretes de Pausas, Checklist de Medicamentos).
        *   Alimentação (Planejador e Registro de Refeições, Lembrete de Hidratação).
        *   Estudos (Pomodoro, Registro de Estudos, Conferência e Histórico de Simulados, Integração do Histórico com Backups).
        *   Saúde (Registro de Medicamentos com intervalo entre doses, Monitoramento de Humor).
        *   Lazer (Temporizador, Atividades de Lazer, Sugestões de Descanso).
    *   **Sprint 2 (Concluído):**
        *   Gestão do Sono (Registro, Visualizador Semanal, Lembretes Personalizáveis, Metas de Sono).
    *   **Sprint 3 (Concluído):**
        *   Notas de Autoconhecimento (Seções organizadas, Modo Refúgio, Tags, Âncoras Visuais).
        *   Informações Pessoais (Perfil, Metas Diárias, Preferências Visuais).
    *   **Sprint 4 (Concluído):**
        *   Melhorias de Interface (Correções visuais, novos ícones/layout, atualização do rodapé, renomeação para StayFocus).
    *   **Sprint 6 (Funcionalidades Adicionais - Concluído):**
        *   Backup e Restauração (Local via JSON, Integração com Google Drive, Inclusão do Histórico de Simulados nos backups).
    *   **Sprint 7 (Final - Planejado):**
        *   Aviso sobre uma pausa de um mês antes do início do desenvolvimento desta sprint.
        *   Sincronização e Apps Mobile (Backend com Supabase, Aplicativos iOS e Android, Sincronização offline).
*   **Status das Sprints:** Cada sprint é marcada como "Concluído" ou "Planejado", com um ícone visual.

**Componentes Utilizados (Exemplos):**

*   `Container`: Para o layout geral da página.
*   `Card`: Para agrupar as informações de cada sprint e a seção de conceito.
*   `Section`: Para o título principal da página.
*   Ícone `CheckCircle2` da `lucide-react` para indicar sprints concluídas.
*   Listas (`ul`, `li`) para detalhar as funcionalidades de cada sprint.

**Dados e Lógica:**

*   A página é puramente informativa e estática, apresentando o histórico e os planos de desenvolvimento do projeto.
*   Não há interações com stores ou APIs para buscar dados dinâmicos; todo o conteúdo está codificado diretamente no JSX.
```

## File: Documents/pagina_app_saude_page.md
```markdown
# Descrição da Página: app/saude/page.tsx

Esta página é dedicada ao acompanhamento da saúde do usuário, focando no registro de medicamentos e no monitoramento do humor.

**Funcionalidades Principais:**

*   **Registro de Medicamentos:** Apresenta o componente `RegistroMedicamentos`, que permite ao usuário registrar os medicamentos que utiliza, possivelmente incluindo dosagens, horários e lembretes.
*   **Monitoramento de Humor:** Exibe o componente `MonitoramentoHumor`, que oferece ferramentas para o usuário registrar e acompanhar seu estado de humor ao longo do tempo, ajudando a identificar padrões ou gatilhos.

**Componentes Utilizados (Exemplos):**

*   `RegistroMedicamentos`: Componente para gerenciar o registro de medicamentos.
*   `MonitoramentoHumor`: Componente para registrar e visualizar o histórico de humor.

**Dados e Lógica:**

*   A página serve como um contêiner para os dois componentes principais (`RegistroMedicamentos` e `MonitoramentoHumor`).
*   A lógica específica para cada funcionalidade (gerenciamento de medicamentos, registro de humor, visualização de dados relacionados) reside dentro dos respectivos componentes importados e seus stores associados (se houver).
```

## File: Documents/pagina_app_sono_page.md
```markdown
# Descrição da Página: app/sono/page.tsx

Esta página é dedicada à gestão do sono do usuário, oferecendo ferramentas para registrar, visualizar e configurar lembretes relacionados ao sono.

**Funcionalidades Principais:**

*   **Navegação por Abas:** A interface é dividida em três abas principais:
    *   **Registrar Sono:** Permite ao usuário registrar seus horários de dormir e acordar, e possivelmente outras informações relevantes sobre a qualidade do sono (componente `RegistroSono`).
    *   **Visualizar Sono:** Apresenta uma visualização dos padrões de sono do usuário, provavelmente em um formato semanal ou gráfico (componente `VisualizadorSemanal`).
    *   **Lembretes:** Permite ao usuário configurar lembretes para ajudar a estabelecer uma rotina de sono (componente `ConfiguracaoLembretes`).
*   **Informações Educacionais:**
    *   Inclui uma seção com informações sobre a importância do sono de qualidade, especialmente para pessoas neurodivergentes.
    *   Oferece dicas para melhorar os hábitos de sono (manter horários regulares, criar rotina relaxante, reduzir luz azul, evitar cafeína).

**Componentes Utilizados (Exemplos):**

*   `RegistroSono`: Formulário ou interface para registrar dados de sono.
*   `VisualizadorSemanal`: Componente para exibir graficamente os dados de sono.
*   `ConfiguracaoLembretes`: Interface para configurar alertas e lembretes de sono.
*   Botões de navegação para alternar entre as abas "Registrar Sono", "Visualizar Sono" e "Lembretes".
*   Um ícone SVG customizado para representar a seção de sono.

**Dados e Lógica:**

*   Gerencia o estado `abaSelecionada` para controlar qual das três seções de funcionalidade (`registro`, `visualizador`, `lembretes`) está ativa e sendo exibida.
*   A lógica específica de cada funcionalidade (registro, visualização, configuração de lembretes) reside nos respectivos componentes importados e, possivelmente, em um `sonoStore` associado.
*   A seção de informações educacionais é estática e visa fornecer contexto e dicas úteis ao usuário.
```
