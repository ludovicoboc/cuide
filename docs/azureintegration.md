# O que é possível fazer com a CLI da Azure

A Azure CLI (Command Line Interface) é uma ferramenta poderosa que permite gerenciar praticamente todos os recursos da Azure diretamente do terminal. Veja o que você pode fazer:

## Principais Funcionalidades da Azure CLI

### 1. Gerenciamento de Recursos Básicos

- **Criar e gerenciar grupos de recursos**:
  ```bash
  az group create --name meuGrupoRecursos --location eastus
  ```

- **Listar recursos existentes**:
  ```bash
  az resource list --resource-group meuGrupoRecursos
  ```

### 2. Computação

- **Criar e gerenciar máquinas virtuais**:
  ```bash
  az vm create --resource-group meuGrupoRecursos --name minhaVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys
  ```

- **Criar VMs Spot com preços reduzidos**:
  ```bash
  az vm create --resource-group meuGrupoRecursos --name minhaVMSpot --image Ubuntu2204 --priority Spot --max-price -1 --eviction-policy Deallocate
  ```

- **Gerenciar clusters do Service Fabric**:
  ```bash
  az sf cluster create --resource-group meuGrupoRecursos --cluster-name meuCluster --location eastus --cluster-size 4
  ```

### 3. Serviços Web e Aplicações

- **Criar e gerenciar App Services**:
  ```bash
  az webapp create --resource-group meuGrupoRecursos --plan meuPlanoServico --name minhaWebApp
  ```

- **Configurar slots de implantação**:
  ```bash
  az webapp deployment slot create --name minhaWebApp --resource-group meuGrupoRecursos --slot staging
  ```

### 4. Armazenamento e Bancos de Dados

- **Criar contas de armazenamento**:
  ```bash
  az storage account create --name minhaContaStorage --resource-group meuGrupoRecursos --location eastus --sku Standard_LRS
  ```

- **Gerenciar bancos de dados SQL**:
  ```bash
  az sql server create --name meuSQLServer --resource-group meuGrupoRecursos --admin-user adminuser --admin-password MinhaS3nha!
  ```

### 5. Redes

- **Criar redes virtuais e sub-redes**:
  ```bash
  az network vnet create --resource-group meuGrupoRecursos --name minhaVNet --address-prefix 10.0.0.0/16 --subnet-name minhaSubnet --subnet-prefix 10.0.0.0/24
  ```

- **Configurar regras de NSG (Network Security Group)**:
  ```bash
  az network nsg rule create --resource-group meuGrupoRecursos --nsg-name meuNSG --name permitirSSH --priority 100 --destination-port-ranges 22
  ```

### 6. Identidade e Segurança

- **Gerenciar usuários e grupos no Azure AD**:
  ```bash
  az ad user create --display-name "Novo Usuário" --password MinhaS3nha! --user-principal-name usuario@seudominio.com
  ```

- **Gerenciar Key Vault e segredos**:
  ```bash
  az keyvault create --name meuKeyVault --resource-group meuGrupoRecursos --location eastus
  ```

### 7. Contêineres

- **Criar e gerenciar clusters AKS (Azure Kubernetes Service)**:
  ```bash
  az aks create --resource-group meuGrupoRecursos --name meuAKSCluster --node-count 2 --enable-addons monitoring
  ```

- **Gerenciar registros de contêineres (ACR)**:
  ```bash
  az acr create --resource-group meuGrupoRecursos --name meuRegistroContainers --sku Basic
  ```

### 8. Automação e DevOps

- **Criar e executar runbooks de automação**:
  ```bash
  az automation runbook create --automation-account-name minhaContaAutomacao --resource-group meuGrupoRecursos --name meuRunbook --type PowerShell
  ```

### 9. Modo Interativo

- **Usar o modo interativo para facilitar o uso**:
  ```bash
  az interactive
  ```

### 10. Gerenciamento de Configuração

- **Definir valores padrão para comandos**:
  ```bash
  az configure --defaults group=meuGrupoRecursos location=eastus
  ```

- **Gerenciar múltiplas assinaturas**:
  ```bash
  az account set --subscription "Nome da Assinatura"
  ```
