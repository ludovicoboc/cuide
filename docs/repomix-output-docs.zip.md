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
docs/
  acrh.md
  Documento_Maritaka.md
  mostrag.md
  rag.md
  route.md
```

# Files

## File: docs/acrh.md
````markdown
# Resumo da Análise do Projeto Anatel2

## Estrutura Geral de Diretórios

O projeto utiliza a estrutura do App Router do Next.js. As principais pastas identificadas são:

*   **`app/`**: Contém a lógica central da aplicação, incluindo:
    *   Páginas (rotas) da aplicação (ex: [`app/page.tsx`](app/page.tsx:1), [`app/alimentacao/page.tsx`](app/alimentacao/page.tsx:1)).
    *   Layouts globais e específicos (ex: [`app/layout.tsx`](app/layout.tsx:1)).
    *   **`app/components/`**: Abriga os componentes React reutilizáveis, frequentemente organizados por funcionalidade (ex: [`app/components/alimentacao/`](app/components/alimentacao), [`app/components/ui/`](app/components/ui)).
    *   **`app/lib/`**: Módulos contendo lógica de negócios, serviços, utilitários e clientes de API (ex: [`app/lib/dataService.ts`](app/lib/dataService.ts:1), [`app/lib/googleDriveClient.ts`](app/lib/googleDriveClient.ts:1)).
    *   **`app/stores/`**: Contém as lojas (stores) do Zustand para gerenciamento de estado global, segmentadas por domínio da aplicação (ex: [`app/stores/alimentacaoStore.ts`](app/stores/alimentacaoStore.ts:1), [`app/stores/concursosStore.ts`](app/stores/concursosStore.ts:1)).
*   **`pages/`**: Principalmente utilizado para as API Routes do Next.js (ex: [`pages/api/gerar-questao.ts`](pages/api/gerar-questao.ts:1), [`pages/api/drive/`](pages/api/drive)).
*   **`public/`**: Armazena arquivos estáticos que são servidos diretamente, como imagens (ex: [`public/images/logo.svg`](public/images/logo.svg)), fontes, arquivos JSON de exemplo (ex: [`public/simulado-exemplo.json`](public/simulado-exemplo.json)) e sons.
*   **`docs/`**: Contém arquivos de documentação do projeto, como guias e exemplos em Markdown e JSON.
*   **`perplexity-mcp-server/`**: Um diretório separado que parece conter um servidor MCP (Model Context Protocol), possivelmente para interagir com a API da Perplexity.

## Principais Tecnologias, Frameworks e Bibliotecas

*   **Next.js ([`package.json#L23`](package.json:23))**: Framework React para desenvolvimento de aplicações web full-stack, utilizado para renderização no servidor (SSR), geração de sites estáticos (SSG), roteamento (App Router) e API routes.
*   **React ([`package.json#L26`](package.json:26))**: Biblioteca JavaScript para construção de interfaces de usuário interativas e componentizadas.
*   **TypeScript ([`package.json#L45`](package.json:45))**: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenibilidade do código. Configurado através do [`tsconfig.json`](tsconfig.json:1).
*   **Tailwind CSS ([`package.json#L44`](package.json:44))**: Framework CSS utility-first para estilização rápida e customizável. Configurado em [`tailwind.config.js`](tailwind.config.js:1) com um tema customizado e cores específicas para diferentes seções da aplicação.
*   **Zustand ([`package.json#L32`](package.json:32))**: Biblioteca para gerenciamento de estado global de forma simples e flexível, utilizada nas stores dentro de [`app/stores/`](app/stores).
*   **Lucide React ([`package.json#L22`](package.json:22))**: Biblioteca de ícones SVG leves e customizáveis.
*   **date-fns ([`package.json#L19`](package.json:19))**: Biblioteca para manipulação de datas e horários.
*   **Google APIs (googleapis [`package.json#L20`](package.json:20))**: Biblioteca cliente para interagir com APIs do Google, provavelmente utilizada para integração com o Google Drive, como sugerido pela presença de [`app/lib/googleDriveClient.ts`](app/lib/googleDriveClient.ts:1) e rotas em [`pages/api/drive/`](pages/api/drive).
*   **Iron Session ([`package.json#L21`](package.json:21))**: Biblioteca para gerenciamento de sessões stateless, útil para autenticação.
*   **Recharts ([`package.json#L29`](package.json:29))**: Biblioteca para criação de gráficos e visualizações de dados.
*   **React Markdown ([`package.json#L28`](package.json:28))**: Componente React para renderizar conteúdo Markdown.
*   **Next Themes ([`package.json#L24`](package.json:24))**: Facilita a implementação de temas (ex: dark/light mode) em aplicações Next.js.
*   **ESLint ([`package.json#L40`](package.json:40)) / Prettier ([`package.json#L43`](package.json:43))**: Ferramentas para linting e formatação de código, garantindo consistência e qualidade.
*   **@next/bundle-analyzer ([`package.json#L35`](package.json:35))**: Ferramenta para analisar o tamanho dos bundles gerados pela aplicação Next.js, configurada em [`next.config.js`](next.config.js:1).
````
## File: docs/Documento_Maritaka.md
````markdown
## Maritaca AI (Empresa Brasileira)

A **Maritaca AI** é uma startup brasileira especializada em modelos de linguagem, similar ao ChatGPT, fundada por Rodrigo Nogueira. A empresa se destaca no cenário brasileiro de inteligência artificial por desenvolver modelos otimizados para a realidade nacional.

### Contexto Brasileiro

A Maritaca AI foi criada reconhecendo as limitações de infraestrutura no Brasil, focando em desenvolver modelos de linguagem que pudessem oferecer eficiência computacional adequada à realidade brasileira. Este posicionamento demonstra uma abordagem pragmática para o desenvolvimento de IA no país.

Rodrigo Nogueira, fundador da Maritaca AI, ganhou notoriedade quando, em março de 2025, teve seu visto de entrada nos Estados Unidos negado, possivelmente devido à sua área de atuação em inteligência artificial.

## Modelos e API da Maritaca

A Maritaca AI desenvolve e disponibiliza o modelo **Sabiá**, um Large Language Model (LLM) brasileiro com foco em português. A empresa oferece acesso aos seus modelos por meio de uma API documentada.

### Modelos Sabiá

- **Sabiá-3**: O modelo mais avançado da Maritaca até o momento
  - Suporta até **128.000 tokens de contexto**
  - Processa até **500.000 tokens de entrada por minuto** via API
  - Cada 1 milhão de tokens equivale a cerca de 700 páginas de texto em português

- **Sabiazinho-3**: Versão mais leve e rápida
  - **32.000 tokens de contexto**
  - Indicado para aplicações que exigem respostas rápidas

### Comparativo dos Modelos

| Modelo | Tokens de Contexto | Indicação de Uso | Preço (por 1M tokens) |
|--------|-------------------|------------------|------------------------|
| Sabiá-3 | 128.000 | Análise de textos extensos | US$ 1.00 – US$ 2.00 |
| Sabiazinho-3 | 32.000 | Respostas rápidas, menor custo | US$ 0.20 (R$ 0,60) |

### Recursos da API da Maritaca

A API da Maritaca facilita a integração dos modelos Sabiá em projetos de desenvolvimento, oferecendo:

- Documentação completa disponível em https://docs.maritaca.ai
- Guia de início rápido para programadores
- Repositório no GitHub (maritaca-ai/maritalk-api) com código e documentação
- Desde janeiro de 2025, suporte a saídas estruturadas (como JSON)

## Guia de Implementação da API Maritaca

A API da Maritaca facilita a integração dos mais recentes modelos da Maritaca em seus projetos. Com acesso a toda a família de modelos Sabiá, é possível explorar as possibilidades e potencializar soluções com esta tecnologia.

### Passo 1: Configuração da Conta

Para começar a utilizar a API da Maritaca:

1. Faça login ou se registre na plataforma da Maritaca
2. Navegue até a página de chaves da API
3. Clique em "Criar nova chave" e nomeie a chave apropriadamente
4. Guarde com segurança sua chave de API - não compartilhe com ninguém

Exemplo de código para uso da chave:

```python
model = maritaca.MariTalk(
    key="<coloque_chave_aqui>", # Cole a chave aqui. Ex: "1288893..."
    model="sabia-3" # No momento, suportamos os modelos sabia-3 e sabia-2-small
)
```

### Passo 2: Configurando o Python

Para utilizar a API da Maritaca:

1. Instale o Python
2. Configure um ambiente virtual (opcional)
3. Instale o Gerenciador de Pacotes PIP

### Passo 3: Instalar a Biblioteca

A API da Maritaca pode ser usada de duas formas:
- Diretamente via sua biblioteca
- Através da compatibilidade com a OpenAI

Para instalar a biblioteca OpenAI, execute:

```bash
pip install openai
```

### Passo 4: Enviando sua Primeira Solicitação de API

Depois de configurar o Python e obter uma chave API, envie uma solicitação usando a biblioteca Python:

```python
import openai

client = openai.OpenAI(
    api_key="<insira sua chave aqui>", # Ex: "1000000..."
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {"role": "user", "content": "Quanto é 2 + 2?"},
    ],
    max_tokens=4000
)

print(f"Resposta: {response.choices[0].message.content}")
```

### Compatibilidade com a OpenAI

A Maritaca API é compatível com as bibliotecas de clientes da OpenAI, tornando fácil experimentar os modelos Sabiá sem grandes modificações em aplicações existentes.

Isso significa que os modelos Sabiá podem ser utilizados em qualquer programa que use as bibliotecas da OpenAI, apenas apontando o endpoint para:
```
https://chat.maritaca.ai/api
```

#### Realizando uma Requisição de Chat

Exemplo de requisição de chat para o modelo sabia-3:

```python
response = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
        {"role": "user", "content": "Me fale sobre o Cristo Redentor"},
    ],
    max_tokens=8000
)

print(response.choices[0].message.content)
```

#### Requisição para Completar Entrada

Além de chats, você também pode utilizar o modelo para completar a entrada:

```python
response = client.completions.create(
    model="sabia-3",
    prompt="Era uma vez, em um reino distante, um jovem aventureiro que sonhava em explorar terras desconhecidas. Um dia, ele encontrou um mapa misterioso que mostrava o caminho para um tesouro perdido",
    max_tokens=175
)

print(response.choices[0].text)
```

#### Requisição de Chat com Streaming

Para receber as respostas em tempo real (streaming):

```python
import os
import openai

stream = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
        {"role": "user", "content": "Me fale sobre o Cristo Redentor"},
    ],
    stream=True,
    max_tokens=8000
)

for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="", flush=True)
```

### Chamada de Funções

A API da Maritaca suporta chamada de funções, permitindo que os modelos Sabiá executem ações específicas:

```python
response = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {"role": "user", "content": "Qual é a previsão do tempo para amanhã em São Paulo?"}
    ],
    tools=[
        {
            "type": "function",
            "function": {
                "name": "obter_previsao_tempo",
                "description": "Obtém a previsão do tempo para uma localização",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "localizacao": {
                            "type": "string",
                            "description": "A cidade e estado, ex. 'São Paulo, SP'"
                        },
                        "unidade": {
                            "type": "string",
                            "enum": ["celsius", "fahrenheit"],
                            "description": "A unidade de temperatura a ser usada"
                        }
                    },
                    "required": ["localizacao"]
                }
            }
        }
    ],
    tool_choice="auto"
)
```

### Saídas Estruturadas

Os modelos Sabiá suportam saídas estruturadas, permitindo respostas em formatos específicos como JSON:

```python
response = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {"role": "user", "content": "Liste 3 capitais da região nordeste com suas populações"}
    ],
    response_format={"type": "json_object"}
)
```

### Embeddings + Sabiá-3 + RAG

A Maritaca oferece embeddings que podem ser usados para implementações de RAG (Retrieval Augmented Generation):

```python
response = client.embeddings.create(
    model="sabia-3",
    input="O Rio de Janeiro é uma cidade maravilhosa",
    encoding_format="float"
)
```

### Rate Limits

Os Rate Limits são mecanismos que controlam quantas requisições ou operações podem ser feitas em um período de tempo específico. A Maritaca implementa os seguintes limites:

- **RPM (Requisições por minuto)**
- **TPM (Tokens por minuto)**

Os limites variam por modelo e tier de uso:

| Tier | Gasto requerido | RPM (sabia-3) | TPM Input (sabia-3) | TPM Output (sabia-3) |
|------|-----------------|---------------|---------------------|----------------------|
| 0    | 0               | 60            | 128.000             | 10.000               |
| 1    | Qualquer        | 1.000         | 2M                  | 200.000              |
| 2    | R$100           | 1.500         | 4M                  | 350.000              |
| 3    | R$500           | 2.000         | 8M                  | 500.000              |
| 4    | R$2.000         | 5.000         | 10M                 | 1M                   |
| 5    | R$5.000         | 10.000        | 20M                 | 2M                   |

### Capacidades e Limitações

**Capacidades:**
- Explicações detalhadas sobre diversos tópicos
- Respostas contextualizadas em conversas
- Tradução de textos para diferentes idiomas
- Geração de conteúdo criativo (histórias, poemas, diálogos)

**Limitações:**
- Dificuldades em tarefas que exigem raciocínio lógico complexo
- Desafios na escrita de código
- Possibilidade de alucinações (inventar fatos ou responder sobre eventos inexistentes)

### LGPD e Inteligência Artificial no Brasil

A Lei Geral de Proteção de Dados (LGPD) que entrou em vigor no Brasil em setembro de 2020 impacta diretamente empresas de IA como a Maritaca, estabelecendo regras para o tratamento de dados pessoais.

#### Princípios Fundamentais Aplicáveis

Os fabricantes de sistemas de IA no Brasil, incluindo a Maritaca AI, devem observar princípios fundamentais da LGPD:

- **Finalidade**: Dados coletados para propósitos claramente definidos
- **Necessidade**: Apenas informações estritamente necessárias são coletadas
- **Transparência**: Titulares dos dados sabem como suas informações são utilizadas

### Contexto da IA Nacional

O cenário de IA no Brasil também conta com outros projetos nacionais relevantes, como a Amazônia IA, um dos primeiros Large Language Models nativos em português brasileiro, desenvolvido pela Wide Labs e anunciado em julho de 2024.

## Uso como Contexto para LLMs

Para utilizar as informações da Maritaca AI como contexto para outros modelos de linguagem:

1. **Integração via API**: Use a documentação disponível em https://docs.maritaca.ai para integrar o modelo Sabiá-3 como fonte de conhecimento
2. **Tokens de Contexto**: Aproveite a capacidade de 128.000 tokens para processar documentos extensos
3. **Especialização em Português**: Utilize para tarefas específicas do idioma português brasileiro
4. **Saídas Estruturadas**: Aproveite o suporte a JSON para integração com outros sistemas

## Fontes
- Blog Cobasi
- Tupisoul
- Prefeitura de Cerquilho
- iNaturalist
- Guilherme Favaron (IA brasileira)
- Poder360
- Migalhas de Proteção de Dados
- LGPD Brazil Info
- Legale
- https://docs.maritaca.ai
- https://www.maritaca.ai
- https://github.com/maritaca-ai/maritalk-api
````

## File: docs/mostrag.md
````markdown
Um exemplo
Exemplo das funcionalidades: O usuário aciona a Assistente pelo wpp para obter informações, alterar informações, incluir ou solicitar a Assistente coisas específicas do painel, como: Estou com hiperfoco em jogos de tabuleiro asiáticos, me ajude a fazer a regulação cognitiva. 

O output poderia ser: Irei realizar a divisão de micro tarefas para que possa diminuir a sua carga cognitiva, observei que você tem 200$ em seu envelope para hiperfocos, com esse valor há a possibilidade de comprar X y Z 

Essa seria a lógica se execução do RAG;

A partir desse gere outros exemplos de uso de RAG pela Assistente

# Exemplos de Uso do Assistente Virtual RAG Personalizado no StayFocus

O Assistente Virtual baseado em RAG (Recuperação Aumentada por Geração) do StayFocus representa uma evolução significativa no suporte a pessoas neurodivergentes, oferecendo interações personalizadas através do WhatsApp. Abaixo estão exemplos detalhados que demonstram como esta tecnologia pode ser implementada para criar experiências verdadeiramente adaptadas às necessidades específicas de cada usuário.

## Exemplos de Interações via WhatsApp

### Exemplo 1: Gerenciamento de Medicação

**Usuário:** Acho que esqueci de tomar meu remédio hoje. Você pode verificar?

**Assistente:** Conforme seus registros, você ainda não marcou a dose de Ritalina das 14h como concluída. Seu histórico mostra que nos últimos 7 dias você tomou esta dose em média às 14:15. Gostaria que eu configurasse um lembrete para daqui a 10 minutos? Notei que você tem uma reunião às 15h e normalmente prefere tomar a medicação pelo menos 30 minutos antes de compromissos importantes.

*Neste exemplo, o RAG recupera dados sobre o histórico de medicação do usuário, padrões de horários, e agenda de compromissos para fornecer uma resposta contextualizada.*

### Exemplo 2: Planejamento de Estudos

**Usuário:** Estou com dificuldade de começar a estudar para a prova de amanhã.

**Assistente:** Entendo sua dificuldade. Analisando seus dados, percebi que você tem rendimento 40% maior quando usa a técnica Pomodoro com intervalos de 20 minutos de estudo e 5 de descanso, especialmente entre 19h e 21h. Seu último registro de estudo para este assunto foi há 3 dias, com foco em "Capítulos 3 e 4". Segundo seu planejador, restam os capítulos 5 e 6 para revisar. Gostaria que eu configurasse uma sequência de Pomodoros para esta noite, com lembretes via WhatsApp? Também posso reservar R$15 do seu envelope de "Recompensas" para você utilizar após completar a sessão de estudos.

*O RAG utiliza dados sobre hábitos de estudo, técnicas eficazes para o usuário específico, conteúdo já estudado e sistema de recompensas para criar uma abordagem personalizada.*

### Exemplo 3: Regulação Emocional

**Usuário:** Estou me sentindo sobrecarregado hoje, não consigo focar em nada.

**Assistente:** Observei em seus registros que esta é a terceira vez esta semana que você relata sensação de sobrecarga. Seu monitoramento de sono mostra que você dormiu em média 5.5 horas nos últimos 3 dias, abaixo da sua meta de 7 horas. Quando você enfrenta este padrão, as técnicas que mais ajudaram no passado foram:

1. 10 minutos de respiração guiada (você completou isto com sucesso 8 das últimas 10 vezes)
2. Caminhada curta ao ar livre (marcada como "muito eficaz" em 90% das vezes)
3. Reorganização de prioridades do dia

Gostaria que eu ativasse o áudio de respiração guiada agora e depois ajudasse a reorganizar suas tarefas para hoje, reduzindo a carga cognitiva?

*Aqui o RAG analisa padrões de estresse, correlações com sono, histórico de técnicas de regulação emocional e suas taxas de sucesso para o usuário específico.*

### Exemplo 4: Gestão Financeira de Hiperfocos

**Usuário:** Estou interessado em começar a aprender sobre fotografia analógica. O que você acha?

**Assistente:** Baseado no seu histórico, identifico que este pode ser o início de um novo hiperfoco. Nos últimos 12 meses, você iniciou 4 hiperfocos (modelismo, ciclismo urbano, café especial e plantas domésticas), com duração média de 6 semanas cada e gasto médio de R$350 por hiperfoco.

Seu envelope de "Hiperfocos" atualmente conta com R$280. Para fotografia analógica, os custos iniciais típicos incluem: câmera básica (R$200-400), filmes (R$40-60 por mês) e revelação (R$25-35 por rolo).

Gostaria que eu criasse um orçamento específico para este novo interesse, com limites de gastos semanais? Também posso pesquisar opções de equipamentos usados que caibam no seu orçamento atual.

*O RAG utiliza dados históricos de comportamento de hiperfoco, padrões de gastos e orçamento atual para fornecer orientação financeira personalizada.*

### Exemplo 5: Suporte para Alimentação

**Usuário:** Não consigo decidir o que comer hoje, estou travado.

**Assistente:** Analisei seus padrões alimentares e notei que você não registrou almoço hoje, e são 15:30. Nos últimos casos em que isso ocorreu, você relatou baixa energia entre 16h-18h, afetando sua produtividade.

Baseado nos ingredientes que você marcou como disponíveis em casa ontem (ovos, pão integral, abacate, tomate), posso sugerir uma torrada com abacate e ovo, que você classificou como "fácil de preparar" e "satisfatória" nas últimas 5 vezes que consumiu.

Alternativamente, há um restaurante a 200m da sua localização atual (Sabor Natural) onde você pediu salada com frango nas últimas duas segundas-feiras. Quer que eu prepare uma ordem para delivery via iFood? Seu envelope de "Alimentação Fora" ainda tem R$85 disponíveis para esta semana.

*O RAG combina dados de registros alimentares, impacto na produtividade, ingredientes disponíveis, preferências passadas, localização atual e orçamento para alimentação.*

### Exemplo 6: Suporte para Reuniões

**Usuário:** Tenho uma reunião em 30 minutos e não me preparei.

**Assistente:** Identifico que você tem uma reunião com a equipe de Marketing às 16h. Baseado nas suas notas anteriores, esta é a terceira reunião deste projeto. Nas reuniões passadas, os principais pontos discutidos foram "estratégia de lançamento" e "calendário de conteúdo".

Preparei um resumo dos seus compromissos assumidos na última reunião:
- Criar 3 opções de headline para o produto (prazo era ontem)
- Revisar o orçamento de mídia digital (completo há 3 dias)

Seu histórico mostra que você normalmente precisa de 10-15 minutos de preparação para sentir-se confiante em reuniões. Recomendo usar os próximos 15 minutos para:
1. Elaborar rapidamente as headlines pendentes
2. Revisar suas notas das reuniões anteriores

Gostaria que eu ativasse o Timer de Foco Rápido para isso?

*O RAG utiliza dados de agenda, notas de reuniões anteriores, tarefas pendentes e padrões pessoais de preparação para reuniões.*

### Exemplo 7: Integração com Sistema de Pagamentos

**Usuário:** Preciso renovar minha assinatura do StayFocus, mas estou ocupado agora.

**Assistente:** Sua assinatura Premium expira em 2 dias. Baseado no seu histórico, você prefere pagamento anual, que oferece 15% de desconto sobre o mensal. O valor da renovação anual é R$249,90.

Posso preparar tudo para um pagamento via PIX, bastando sua confirmação quando estiver disponível. Como alternativa, posso agendar a renovação automática para amanhã às 10h, horário em que você normalmente faz suas transações bancárias, segundo seus dados de uso.

O que prefere? Lembro que sua assinatura Premium já economizou R$185 em compras por impulso neste mês, segundo o módulo de gestão financeira.

*O RAG utiliza dados sobre preferências de pagamento, padrões de uso bancário e benefícios mensuráveis do aplicativo para facilitar a renovação.*

## Conclusão

Estes exemplos demonstram o potencial transformador de um assistente baseado em RAG para usuários neurodivergentes. A capacidade de acessar e interpretar dados pessoais para oferecer suporte contextualizado via WhatsApp representa uma evolução significativa no campo das tecnologias assistivas.

A personalização proporcionada pela tecnologia RAG permite que o assistente compreenda não apenas as necessidades genéricas de pessoas com TDAH, mas os padrões, preferências e desafios específicos de cada usuário individual, tornando o suporte significativamente mais eficaz e adaptado.

Esta abordagem de suporte personalizado via WhatsApp, combinada com integração ao sistema financeiro PIX, oferece uma solução verdadeiramente brasileira para os desafios enfrentados por pessoas neurodivergentes, aproveitando tecnologias já familiares e amplamente adotadas no país.

Citações:
[1] Screenshot_20250314_020658_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/NOwUwOAjBjAaAXI/Screenshot_20250314_020658_Discord.jpg
[2] Screenshot_20250314_020708_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/nasasEyPSVxdCGg/Screenshot_20250314_020708_Discord.jpg
[3] Screenshot_20250314_020646_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/DfnHmaPLgwKtIQg/Screenshot_20250314_020646_Discord.jpg
[4] Key Use Cases of RAG: From Chatbots to Research Assistants https://dev.to/shaheryaryousaf/key-use-cases-of-rag-from-chatbots-to-research-assistants-356f
[5] AI Assistants: The Future of Personalization?! - Acceleraid https://acceleraid.ai/en/ai-assistants-the-future-of-personalization/
[6] Top 5 AI Assistant To-do List Tools for Better Task Planning and ... https://xmind.app/blog/top-5-ai-to-do-list-tools/
[7] WhatsApp Integration | Botpress Hub https://botpress.com/integrations/whatsapp
[8] Top 5 #AI technologies to support cognitive decline - LinkedIn https://www.linkedin.com/pulse/top-5-ai-technologies-support-cognitive-decline-roy-koren
[9] 7 Practical Applications of RAG Models and their Impact on Society https://hyperight.com/7-practical-applications-of-rag-models-and-their-impact-on-society/
[10] 10 Use Cases of AI Assistants to Develop Your Ideal Customer ... https://www.linkedin.com/pulse/10-use-cases-ai-assistants-develop-your-ideal-profile-hoogstrate-je2ce
[11] How To Use an AI Personal Assistant for Work: Top 8 Tools - Otter.ai https://otter.ai/blog/ai-personal-assistant-for-work
[12] How to build a WhatsApp AI assistant - DEV Community https://dev.to/ben_james/how-to-build-a-whatsapp-ai-assistant-38l2
[13] AI Assistant | Best Types and Key Features for Work Productivity https://aisera.com/chatbots-virtual-assistants-conversational-ai/
[14] 10 Real-World Examples of Retrieval Augmented Generation https://www.signitysolutions.com/blog/real-world-examples-of-retrieval-augmented-generation
[15] 6 use cases of artificial intelligence applied in CRM. - Pleasepoint https://pleasepoint.com/en/blog/casos-de-uso-crm/6-use-cases-of-pleasepoints-artificial-intelligence-applied-in-crm
[16] The 8 best AI scheduling assistants - Zapier https://zapier.com/blog/best-ai-scheduling/
[17] AI Whatsapp GPT - Chat & Ask AI Developed on GPT-4o https://askaichat.app/features/whatsapp-gpt
[18] 5 Ways an AI Assistant Can Support IT - Workgrid https://www.workgrid.com/blog/ai-assistant-for-work-it
[19] RAG-Powered Virtual Assistants: Revolutionizing User Interaction https://www.novusasi.com/blog/rag-powered-virtual-assistants-revolutionizing-user-interaction
[20] The Rise of AI Assistants: Revolutionising Personalisation and ... https://flytxt.ai/blog/the-rise-of-ai-assistants-revolutionizing-customer-loyalty-paradigm/
[21] 10 Tasks to Automate with an AI Assistant - AutoGPT https://agpt.co/blog/10-tasks-to-automate-with-an-ai-assistant
[22] ChatGPT + DALL-E + WhatsApp = AI Assistant :robot - GitHub https://github.com/askrella/whatsapp-chatgpt
[23] A complete guide on AI-powered personal assistants with examples https://alexanderclifford.co.uk/blog/artificial-intelligence-ai-powered-personal-assistants/
````

## File: docs/rag.md
````markdown
Exemplo das funcionalidades: O usuário aciona a Assistente pelo wpp para obter informações, alterar informações, incluir ou solicitar a Assistente coisas específicas do painel, como: Estou com hiperfoco em jogos de tabuleiro asiáticos, me ajude a fazer a regulação cognitiva. 

O output poderia ser: Irei realizar a divisão de micro tarefas para que possa diminuir a sua carga cognitiva, observei que você tem 200$ em seu envelope para hiperfocos, com esse valor há a possibilidade de comprar X y Z 

Essa seria a lógica se execução do RAG

# Integração do Assistente Virtual RAG com WhatsApp: Exemplo de Funcionalidade

O exemplo compartilhado ilustra perfeitamente como a funcionalidade do assistente virtual personalizado baseado em RAG funcionaria quando integrado ao WhatsApp, utilizando dados do backend do StayFocus para fornecer suporte contextualizado e personalizado para usuários neurodivergentes. Esta demonstração representa um caso de uso real e valioso que destaca o potencial da solução proposta.

## Funcionamento do Fluxo de Interação

A interação exemplificada demonstra o fluxo completo do sistema RAG (Retrieval Augmented Generation) em ação, aproveitando a popularidade do WhatsApp no Brasil como canal de comunicação primário. Quando o usuário envia uma mensagem como "Estou com hiperfoco em jogos de tabuleiro asiáticos, me ajude a fazer a regulação cognitiva", o sistema executa vários processos essenciais:

### Processo de Recuperação (Retrieval)

O sistema RAG primeiro acessa o banco de dados personalizado do usuário no backend do StayFocus, recuperando informações críticas como:

1. Dados financeiros (envelope para hiperfocos com saldo de $200)
2. Histórico de comportamento relacionado a hiperfocos anteriores
3. Estratégias de regulação cognitiva previamente eficazes para este usuário específico
4. Padrões de consumo e preferências relacionados a jogos

Esta etapa demonstra como o assistente não está simplesmente gerando respostas genéricas, mas baseando suas recomendações em dados reais e personalizados do usuário, tornando a interação significativamente mais relevante e útil.

### Processo de Geração (Generation)

Com os dados recuperados, o assistente gera uma resposta contextualizada como "Irei realizar a divisão de micro tarefas para que possa diminuir a sua carga cognitiva, observei que você tem 200$ em seu envelope para hiperfocos, com esse valor há a possibilidade de comprar X, Y e Z". Esta resposta demonstra como o sistema:

1. Reconhece a necessidade de regulação cognitiva (dividindo tarefas complexas em unidades gerenciáveis)
2. Incorpora dados financeiros específicos do usuário
3. Oferece recomendações personalizadas baseadas nos recursos disponíveis
4. Apresenta opções concretas e viáveis (representadas por X, Y e Z)

## Benefícios para Usuários Neurodivergentes

Esta funcionalidade atende diretamente às necessidades específicas de pessoas com TDAH, que frequentemente:

1. Experimentam hiperfoco intenso em áreas de interesse, podendo levar a comportamentos impulsivos
2. Enfrentam desafios com sobrecarga cognitiva quando tentam processar múltiplas informações
3. Beneficiam-se de assistência externa para decomposição de tarefas complexas
4. Necessitam de suporte para tomada de decisão financeira responsável durante períodos de hiperfoco

O assistente demonstra como a tecnologia RAG pode ajudar a reduzir a carga cognitiva extrânea, um conceito importante da Teoria da Carga Cognitiva destacado nas pesquisas sobre aprendizagem e performance cognitiva. Ao gerenciar ativamente a carga intrínseca através da divisão de tarefas e fornecer opções claras, o assistente facilita a autorregulação do usuário.

## Vantagens Técnicas e Comerciais da Abordagem

Do ponto de vista técnico e comercial, este exemplo demonstra várias vantagens significativas da solução proposta:

1. **Personalização avançada**: O assistente vai além de respostas genéricas, utilizando dados específicos do usuário para gerar recomendações altamente relevantes.

2. **Integração com ecossistema brasileiro**: Aproveitando o WhatsApp como canal de comunicação, alinha-se perfeitamente com os hábitos digitais do mercado brasileiro.

3. **Abordagem pragmática**: Oferece soluções práticas e implementáveis, incluindo opções de compra dentro do orçamento disponível.

4. **Valor percebido claro**: Demonstra concretamente como o serviço poderia justificar um modelo de assinatura, já que fornece assistência personalizada que seria difícil de replicar com ferramentas genéricas.

Esta demonstração funcional serve como prova de conceito convincente do valor que a integração do assistente RAG traria para os usuários do StayFocus, validando o modelo de negócios proposto e ilustrando claramente o diferencial competitivo no mercado de aplicativos para neurodivergentes.

Citações:
[1] Screenshot_20250314_020658_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/NOwUwOAjBjAaAXI/Screenshot_20250314_020658_Discord.jpg
[2] Screenshot_20250314_020708_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/nasasEyPSVxdCGg/Screenshot_20250314_020708_Discord.jpg
[3] Screenshot_20250314_020646_Discord.jpg https://pplx-res.cloudinary.com/image/upload/v1741928956/user_uploads/DfnHmaPLgwKtIQg/Screenshot_20250314_020646_Discord.jpg
[4] RAG-Powered Virtual Assistants: Revolutionizing User Interaction https://www.novusasi.com/blog/rag-powered-virtual-assistants-revolutionizing-user-interaction
[5] Top 9 RAG Tools to Boost Your LLM Workflows https://lakefs.io/rag-tools/
[6] How Can AI Help Students Reduce Cognitive Load at School? https://www.linkedin.com/pulse/how-can-ai-help-students-reduce-cognitive-load-school-zielonka
[7] BEST PRACTICES FOR FINANCIAL DATA ANALYSIS WITH AI | ATS https://www.atscom.it/best-practices-for-financial-data-analysis-with-ai/?lang=en
[8] How to build a WhatsApp AI assistant - DEV Community https://dev.to/ben_james/how-to-build-a-whatsapp-ai-assistant-38l2
[9] Building a RAG-Based Personal Knowledge Assistant https://incubity.ambilio.com/building-a-rag-based-personal-knowledge-assistant/
[10] Best AI tools for retrieval augmented generation (RAG) - Codingscape https://codingscape.com/blog/best-ai-tools-for-retrieval-augmented-generation-rag
[11] Revolutionize Education: AI Meets Cognitive Load Theory - LinkedIn https://www.linkedin.com/pulse/harnessing-ai-education-aligning-cognitive-load-theory-abdulla-pathan-32t7f
[12] AI in Finance: Applications, Examples & Benefits | Google Cloud https://cloud.google.com/discover/finance-ai
[13] Easiest Way to Connect AI Chatbots to WhatsApp Cloud API https://www.youtube.com/watch?v=A710LnbB2FE
[14] Top Use Cases of Retrieval-Augmented Generation (RAG) in AI https://www.glean.com/blog/retrieval-augmented-generation-use-cases
[15] K2view RAG Tool | Unleashing the Power of Enterprise Data https://www.k2view.com/solutions/rag-tools/
[16] How can artificial intelligence decrease cognitive and work burden ... https://pmc.ncbi.nlm.nih.gov/articles/PMC10466077/
[17] AI Integration in Financial Apps: Market Analysis and Strategies for ... https://www.linkedin.com/pulse/ai-integration-financial-apps-market-analysis-strategies-success-q7dpf
[18] How Digital AI Assistants Are Different from WhatsApp API Services https://www.linkedin.com/pulse/how-digital-ai-assistants-different-from-whatsapp-api-akshat-bandlish-imihc
[19] 10 RAG examples and use cases from real companies - Evidently AI https://www.evidentlyai.com/blog/rag-examples
[20] Compare Top 12 Retrieval Augmented Generation Tools ['25] https://research.aimultiple.com/retrieval-augmented-generation/
[21] The Impact of Artificial Intelligence on Cognitive Load - CIDDL https://ciddl.org/the-impact-of-artificial-intelligence-on-cognitive-load/
[22] Leveraging Generative AI for Financial Analysis https://corporatefinanceinstitute.com/resources/fpa/ai-for-financial-analysis/
[23] Building a WhatsApp genAI Assistant with Amazon Bedrock and ... https://community.aws/content/2eIBNR2WxhmNjAgjJLyHaBQYZP2/building-a-whatsapp-genai-assistant-with-amazon-bedrock-and-claude-3
````

## File: docs/route.md
````markdown
# Mapeamento de Páginas e Rotas

Esta seção detalha as principais rotas da aplicação e os arquivos `page.tsx` correspondentes que as definem, com base na estrutura do App Router do Next.js.

*   `/`: [`app/page.tsx`](app/page.tsx:1)
*   `/alimentacao`: [`app/alimentacao/page.tsx`](app/alimentacao/page.tsx:1)
*   `/autoconhecimento`: [`app/autoconhecimento/page.tsx`](app/autoconhecimento/page.tsx:1)
*   `/concursos`: [`app/concursos/page.tsx`](app/concursos/page.tsx:1)
*   `/concursos/[id]`: [`app/concursos/[id]/page.tsx`](app/concursos/[id]/page.tsx:1)
*   `/estudos`: [`app/estudos/page.tsx`](app/estudos/page.tsx:1)
*   `/estudos/materiais`: [`app/estudos/materiais/page.tsx`](app/estudos/materiais/page.tsx:1)
*   `/estudos/simulado`: [`app/estudos/simulado/page.tsx`](app/estudos/simulado/page.tsx:1)
*   `/estudos/simulado-personalizado`: [`app/estudos/simulado-personalizado/page.tsx`](app/estudos/simulado-personalizado/page.tsx:1)
*   `/financas`: [`app/financas/page.tsx`](app/financas/page.tsx:1)
*   `/hiperfocos`: [`app/hiperfocos/page.tsx`](app/hiperfocos/page.tsx:1)
*   `/lazer`: [`app/lazer/page.tsx`](app/lazer/page.tsx:1)
*   `/perfil`: [`app/perfil/page.tsx`](app/perfil/page.tsx:1)
*   `/perfil/ajuda`: [`app/perfil/ajuda/page.tsx`](app/perfil/ajuda/page.tsx:1)
*   `/receitas`: [`app/receitas/page.tsx`](app/receitas/page.tsx:1)
*   `/receitas/[id]`: [`app/receitas/[id]/page.tsx`](app/receitas/[id]/page.tsx:1)
*   `/receitas/adicionar`: [`app/receitas/adicionar/page.tsx`](app/receitas/adicionar/page.tsx:1)
*   `/receitas/editar/[id]`: [`app/receitas/editar/[id]/page.tsx`](app/receitas/editar/[id]/page.tsx:1)
*   `/receitas/lista-compras`: [`app/receitas/lista-compras/page.tsx`](app/receitas/lista-compras/page.tsx:1)
*   `/roadmap`: [`app/roadmap/page.tsx`](app/roadmap/page.tsx:1)
*   `/saude`: [`app/saude/page.tsx`](app/saude/page.tsx:1)
*   `/sono`: [`app/sono/page.tsx`](app/sono/page.tsx:1)
````
