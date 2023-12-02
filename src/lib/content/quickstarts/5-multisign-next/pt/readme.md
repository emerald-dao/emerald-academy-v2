---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 5: Multisign**

🎫 Implemente um contrato Multisign para aprender os conceitos básicos de retiradas e depósitos com assinaturas múltiplas em um Tesouro DAO no blockchain Flow e Cadence. Você usará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para entrar em contas de teste.
- Um aplicativo modelo Next.js com scripts e transações de amostra para interagir com seu contrato.

🌟 O resultado final é um DApp que permite que qualquer pessoa deposite $FLOW em um Tesouro DAO, e os administradores devem usar assinaturas múltiplas para retirar o $FLOW do Tesouro.

💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Discord Emerald City](https://discord.gg/emerald-city-906264258189332541)**!

---

# **📦 Checkpoint 0: Instalação**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use Node v16 ou uma versão anterior, pois a v17 pode causar erros 🧨). Você saberá que instalou corretamente se digitar **`node -v`** no terminal e aparecer a versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para seu sistema 🧨). Você saberá que instalou corretamente se digitar **`flow version`** no terminal e aparecer a versão.

```sh
git clone https://github.com/emerald-dao/5-multisign.git
```

> em uma janela de terminal, 📱 instale as dependências e inicie seu frontend:
> 

```sh
cd 5-multisign
npm install
npm run dev
```

> em uma segunda janela de terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 5-multisign
flow emulator start -v
```

*Nota: a flag **`-v`** significa imprimir saídas de transação e script no seu emulador local*

> em uma terceira janela de terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 5-multisign
flow project deploy
flow dev-wallet
```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Log In" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de tokens Flow. Selecione a primeira conta para fazer login nela.
> 

# **🔖 Checkpoint 2: Depósito $FLOW**

Depois de entrar no seu DApp, você verá um Tesouro que atualmente tem 0 $FLOW dentro dele. Você notará que no topo você tem um grande saldo de $FLOW, então vamos dar algum ao nosso tesouro!

> Clique no botão "Depósito". Insira 100 para a quantidade e escreva qualquer descrição que desejar.
> 

<img src="https://i.imgur.com/YC9IqZt.png" alt="depósito" width="400" />

> Clique em "Depósito" novamente e você notará que um popup de transação aparece:
> 

<img src="https://i.imgur.com/GiDWROX.png" alt="popup de transação de depósito" width="400" />

Depois de clicar em Aprovar, você notará que o saldo no Tesouro é atualizado. Além disso, um histórico do depósito é colocado na seção "Histórico de transações".

> Clique no depósito em "Histórico de transações". Ele mostrará os detalhes dessa transação:
> 

<img src="https://i.imgur.com/E4bh4E5.png" alt="histórico de depósito" width="400" />

---

# **👪 Checkpoint 3: Sacar $FLOW**

Agora que depositamos $FLOW no tesouro, vamos testar a realização de um saque.

> Na página principal, clique no botão "Sacar". Insira 10 para a quantidade, 0xf8d6e0586b0a20c7 para o beneficiário e escreva qualquer descrição que desejar.
> 

<img src="https://i.imgur.com/0ZWjZoA.png" alt="saque" width="400" />

> Clique em "Solicitar Saque" e você notará que um popup de transação aparece.
> 

Depois de clicar em Aprovar, você notará que o saldo no Tesouro *não* é atualizado. Isso ocorre porque os administradores do tesouro devem assinar a solicitação para que ela seja concluída. No entanto, é mostrado um histórico "Pendente":

<img src="https://i.imgur.com/13YPTA5.png" alt="pendente" width="400" />

---

# **📑 Checkpoint 4: Assinar Pedido de Saque**

Você pode ver todos os administradores do tesouro na página principal. Inicialmente, apenas a conta **`0xf8d6e0586b0a20c7`** é um administrador, então, se eles assinarem uma solicitação, ela será aprovada.

> Da página principal, clique em "Ver painel de controle do administrador".
> 

Você verá todas as solicitações de saque pendentes que precisa votar.

> Clique na solicitação e você será direcionado para uma página descrevendo a solicitação:
> 

<img src="https://i.imgur.com/1q5b9RW.png" alt="informações pendentes" width="400" />

> Assine a transação clicando no botão "Assinar solicitação". Aprove a transação.
> 

Depois de assinar a transação, você notará que "Pendente" muda para "Completo" no canto superior esquerdo. Isso ocorre porque todos os administradores aprovaram a solicitação de saque.

Além disso, o token $FLOW foi retirado do tesouro e depositado no beneficiário (**`0xf8d6e0586b0a20c7`**).

Se você retornar à página principal, notará que agora há um histórico marcando a retirada concluída.

---

# **👀 Checkpoint 5: Adicionar um Novo Administrador**

Vamos testar a adição de um novo administrador ao Tesouro. Depois de fazer isso, o novo administrador também terá que assinar solicitações de saque para que elas sejam aprovadas.

Se você sair da sua conta e entrar com a Conta A, notará que não pode ver o Painel de Controle do Administrador. Isso ocorre porque você ainda não é um Administrador do Tesouro! Vamos mudar isso.

> Faça login novamente na Conta de Serviço e volte para o painel de controle do administrador. Clique em "Adicionar administrador" e adicione 0x179b6b1cb6755e31 como um novo administrador.
> 

> Em seguida, repita os Pontos de Controle #3 e #4 para criar e assinar uma solicitação de saque.
> 

Depois de fazer isso, você notará que quando assinamos a nova solicitação de saque da Conta de Serviço, a solicitação não foi aprovada! Isso ocorre porque também devemos assiná-la na Conta A.

> Faça login na Conta A, visite o painel de controle do administrador e assine a nova solicitação de saque.
> 

Agora foi oficialmente aprovada!

---

# **💾 Checkpoint 6: Faça o deploy para a testnet!**

📔 Pronto para fazer o deploy em uma testnet pública?!?

> 🔐 Gere um endereço de deployer digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, você precisará delas em breve.
> 

<img src="https://i.imgur.com/jU9sRiL.png" alt="gerar par de chaves" />

> 👛 Crie sua conta de deployer acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/OitvEoO.png" alt="configurar conta na testnet no site" width="400" />

> Após terminar, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você precisará dele!
> 

> ⛽️ Adicione sua nova conta testnet ao seu flow.json modificando as seguintes linhas de código. Cole o endereço que você copiou acima onde diz "YOUR GENERATED ADDRESS" e cole sua chave privada onde diz "YOUR PRIVATE KEY".
> 

```json
"accounts": {
  "emulator-account": {
    "address": "f8d6e0586b0a20c7",
    "key": "5112883de06b9576af62b9aafa7ead685fb7fb46c495039b1a83649d61bff97c"
  },
  "testnet-account": {
    "address": "YOUR GENERATED ADDRESS",
    "key": {
      "type": "hex",
      "index": 0,
      "signatureAlgorithm": "ECDSA_P256",
      "hashAlgorithm": "SHA3_256",
      "privateKey": "YOUR PRIVATE KEY"
    }
  }
},
"deployments": {
  "emulator": {
    "emulator-account": [
      "Multisign"
    ]
  },
  "testnet": {
    "testnet-account": [
      "Multisign"
    ]
  }
}

```

> 🚀 Faça o deploy do seu contrato inteligente Multisign:
> 

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/h2CId5N.png" alt="deploy do contrato para testnet" />

> Por último, configure seu arquivo .env para apontar para o TestNet do Flow para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o endereço testnet gerado
2. **`NEXT_PUBLIC_STANDARD_ADDRESS`** para **`0x9a0766d93b6608b7`**
3. **`NEXT_PUBLIC_FLOW_TOKEN_ADDRESS`** para **`0x7e60df042a9c0868`**
4. **`PRIVATE_KEY`** para sua chave privada
5. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
6. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nossa própria blockchain local ou carteira. Tudo está na testnet!

Vamos experimentar nossa aplicação no testnet:

1. Execute **`npm run dev`** para iniciar sua aplicação em um terminal.
2. Em **[http://localhost:3000/](http://localhost:3000/)**, clique em "conectar" e faça login na sua carteira Blocto ou Lilico, certificando-se de copiar o endereço com o qual você faz login.
3. Financie sua conta de testnet colando seu endereço em **[https://testnet-faucet.onflow.org/fund-account](https://testnet-faucet.onflow.org/fund-account)**
4. Deposite $FLOW no tesouro.
5. Faça uma nova solicitação de retirada.
6. Por padrão, o administrador do tesouro é a conta à qual você implantou seu contrato. No entanto, não temos essa conta em uma carteira como Lilico ou Blocto, então teremos dificuldades em assinar a solicitação de retirada. Para resolver isso, criamos um comando para você assinar propostas a partir do seu terminal:
- No seu terminal, digite **`npm run sign [O ID DA PROPOSTA]`** (você pode obter o **`proposalId`** clicando na solicitação e vendo seu número)
- Você deve ver um "Transaction Id" impresso. Se você acessar o **[Testnet Flowdiver](https://testnet.flowdiver.io)** e colar esse Transaction Id, você verá informações sobre essa transação de criação.

---

# **📝 Faça edições!**

🔏 Você também pode verificar seu contrato inteligente multisign **`Multisign.cdc`** em **`flow/cadence/Multisign.cdc`**.

💼 Dê uma olhada rápida em como seu contrato é implantado em **`flow.json`**.

📝 Se você deseja fazer edições na interface, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões secundárias**

> 🏃 Vá para o seu próximo desafio aqui.
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Poste-os no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
>