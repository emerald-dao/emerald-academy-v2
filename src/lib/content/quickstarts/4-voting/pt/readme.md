---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 4: Votação**

🎫 Implemente um contrato de votação para aprender o básico de votação dentro de uma DAO no blockchain Flow e Cadence. Você usará:

- O emulador Flow local para implantar contratos inteligentes.
- A carteira Flow local de desenvolvimento para fazer login nas contas de teste.
- Um aplicativo modelo Next.js com scripts e transações de amostra para interagir com seu contrato.

🌟 O resultado final é um DApp que cria uma DAO aberta que permite que os membros da comunidade criem propostas e votem nelas com base nas participações em tokens que governam a DAO.

💬 Conheça outros construtores trabalhando neste desafio e obtenha ajuda no **[Discord Emerald City](https://discord.gg/emeraldcity)**!

---

# **📦 Checkpoint 0: Instalar**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use o Node v16 ou uma versão anterior, pois a v17 pode causar erros 🧨). Você sabe que o instalou se digitar **`node -v`** no terminal e imprimir uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para seu sistema 🧨). Você sabe que o instalou se digitar **`flow version`** no terminal e imprimir uma versão.

```sh
git clone https://github.com/emerald-dao/4-voting.git

```

> em uma janela do terminal, 📱 instale as dependências e inicie o frontend:
> 

```sh
cd 4-voting
npm install
npm run dev
```

> em uma segunda janela do terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 4-voting
flow emulator start -v
```

*Nota: a flag **`-v`** significa imprimir a saída de transação e script no seu emulador local*

> em uma terceira janela do terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 4-voting
flow project deploy
flow dev-wallet
```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira Flow local de desenvolvimento**.

> Clique no botão "Log In" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de Flow Token. Selecione a primeira conta para fazer login nela.
> 

---

# **🔖 Checkpoint 2: Nomear e descrever sua DAO**

Depois de fazer login no nosso DApp, você verá que não há nome nem descrição para a nossa DAO:

<img src="https://i.imgur.com/YxDuWN5.png" alt="empty" width="400" />

> Abra ./pages/index.js e role para baixo até ver "Example DAO" e "Replace this with a description of your DAO". Substitua essas linhas por um nome e descrição da sua DAO.
> 

Agora você verá que isso foi alterado na interface:

<img src="https://i.imgur.com/nRHh0Mr.png" alt="nome e descrição do dao" width="400" />

---

# **👪 Checkpoint 3: Participar do DAO**

Agora que demos um nome e descrição ao nosso DAO, vamos participar do DAO!

> Clique no botão "Join this DAO" e você verá um modelo de transação aparecer:
> 

<img src="https://i.imgur.com/pvRoZPb.png" alt="participar do dao tx" width="400" />

Se você clicar em "Approve", terá acesso ao painel principal do DAO.

Por trás dos bastidores, você acabou de configurar seu próprio cofre de tokens para o token que governa este DAO.

> Para ver o contrato inteligente deste token, vá para ./flow/cadence/ExampleToken.cdc
> 

> Para ver como essa transação foi executada, confira a função joinDAO dentro de ./pages/index.js
> 

---

# **📑 Checkpoint 4: Criar uma Proposta**

Depois de entrar no DAO, você será levado ao painel principal do seu DAO. Você pode ver que não há propostas ativas, então vamos criar uma!

> Pressione o botão "Submit Proposal" no lado direito
> 

Para criar uma proposta, você deve preencher:

- O nome da proposta
- A imagem da proposta
- Uma data de início e fim
- Uma descrição da proposta

<img src="https://i.imgur.com/HMfsBPQ.png" alt="preenchendo campos da proposta" width="400" />

> Clique em "Submit Proposal" para executar uma transação que criará a nova proposta on-chain
> 

<img src="https://i.imgur.com/Fg8Qmuz.png" alt="executar proposta de envio tx" width="400" />

Um popup aparecerá para criar sua nova proposta. Esta é uma transação que alterará os dados na blockchain. Especificamente, está criando um novo recurso **`Proposal`** e armazenando-o na coleção de propostas do seu DAO.

> Para ver como essa transação foi executada, confira a função submitProposal dentro de ./pages/submit.js
> 

> Para saber mais sobre Cadence e Resources, você pode consultar o código do contrato em ./flow/cadence/Vote.cdc ou verificar nosso <a href="https://github.com/emerald-dao/beginner-cadence-course">Curso Iniciante de Cadence</a>
> 

Depois de clicar em "Approve", você será levado de volta ao painel principal. Agora você deve ver uma votação em andamento:

<img src="https://i.imgur.com/PQXUtbb.png" alt="uma votação está em andamento" width="400" />

---

# **👀 Checkpoint 5: Visualizando uma Proposta**

Agora que uma proposta foi criada, vamos clicar nela e ver como ela é:

<img src="https://i.imgur.com/R78d772.png" alt="proposta ativa" width="400" />

Você deve ver:

- Nome
- Descrição
- Imagem
- Contagem de votos
- Quem votou em qual opção
- Data de início e fim
- Quem enviou a proposta

No entanto, para realmente votar, devemos possuir alguns tokens dentro do DAO!

---

# **💸 Checkpoint 6: Obtendo Tokens**

Para obter alguns tokens, vamos criar alguns para a nossa conta.

> Em uma nova janela do terminal, execute npm run mint 0xf8d6e0586b0a20c7 30.0
> 

Isso criará 30.0 tokens para a conta com endereço 0xf8d6e0586b0a20c7.

Se você voltar ao aplicativo e atualizar a página (certificando-se de estar conectado com a conta 0xf8d6e0586b0a20c7), você notará a atualização do saldo no topo:

<img src="https://i.imgur.com/zH4fgxP.png" alt="atualização do saldo" width="400" />

> Para ver como esse comando criou tokens em nossa conta, verifique ./actions/mint_tokens.js
> 

---

# **📤 Checkpoint 7: Votando**

Você pode clicar para votar de uma determinada maneira, clicando em "For", "Against" ou "Abstain".

> Clique em uma das opções de voto e veja o popup da transação aparecer:
> 

<img src="https://i.imgur.com/AOjf5wx.png" alt="tx para votar" width="400" />

Se você clicar em aprovar, deve ver a contagem de votos mudar e seu endereço ser adicionado à lista de eleitores abaixo. Lembre-se de que você não pode votar novamente!

---

# **📘 Checkpoint 8: Votar com uma Conta Diferente**

Vamos tentar enviar um voto de outra conta!

1. No topo, clique em "Logout" e faça login com uma conta diferente da anterior.
2. Junte-se ao DAO
3. Crie tokens para a nova conta usando o mesmo comando do Checkpoint 6, certificando-se de alterar o endereço para a nova conta.
4. Clique na mesma proposta e vote novamente.
5. Observe a contagem de votos mudar!

---

# **💾 Checkpoint 9: Implantá-lo no testnet!**

📔 Pronto para implantar em um testnet público?!?

> 🔐 Gere um endereço de implantador digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, você precisará delas em breve.
> 

<img src="https://i.imgur.com/jU9sRiL.png" alt="gerar par de chaves" />

> 👛 Crie sua conta de implantador acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/OitvEoO.png" alt="configurar conta de teste no site" width="400" />

> Depois de terminar, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você precisará dele!
> 

> ⛽️ Adicione sua nova conta de teste ao seu flow.json modificando as seguintes linhas de código. Cole seu endereço que você copiou acima onde diz "YOUR GENERATED ADDRESS" e cole sua chave privada onde diz "YOUR PRIVATE KEY".
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
      "ExampleToken",
      "Vote"
    ]
  },
  "testnet": {
    "testnet-account": [
      "ExampleToken",
      "Vote"
    ]
  }
}
```

> 🚀 Implante seu contrato inteligente Vote:
> 

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/nsASuV3.png" alt="implantar contrato no testnet" />

> Por último, configure seu arquivo .env para apontar para o Flow TestNet para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço testnet gerado
2. **`NEXT_PUBLIC_STANDARD_ADDRESS`** para **`0x9a0766d93b6608b7`**
3. **`PRIVATE_KEY`** para sua chave privada
4. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
5. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nossa própria blockchain ou carteira local. Tudo está no testnet!

Vamos testar nosso aplicativo no testnet:

1. Execute **`npm run dev`** para iniciar seu aplicativo em um terminal.
2. Em **[http://localhost:3000/](http://localhost:3000/)**, clique em "connect" e faça login na sua carteira Blocto ou Lilico, certificando-se de copiar o endereço com o qual você faz login.
3. Junte-se ao DAO e execute a transação. Aguarde cerca de 30 segundos e, em seguida, atualize a página. Você deve estar no DAO agora.
4. Crie uma nova proposta, como antes.
5. Para obter tokens, execute **`npm run mint [THE ADDRESS YOU COPIED IN STEP 2] [AMOUNT OF TOKENS]`** como fizemos no Checkpoint 6.
6. No seu terminal, você deve ver um "Transaction Id" impresso. Se você acessar o **[Testnet Flowscan](https://testnet.flowscan.org/)** e colar esse Transaction Id, você deverá ver informações sobre a transação de criação de tokens.
7. Tente votar na sua proposta.

---

# **📝 Faça edições!**

🔏 Você também pode verificar seu contrato inteligente de token **`ExampleToken.cdc`** em **`flow/cadence/ExampleToken.cdc`** ou seu contrato inteligente de votação/DAO **`Vote.cdc`** em **`flow/cadence/Vote.cdc`**

💼 Dê uma olhada rápida em como seu contrato é implantado em **`flow.json`**.

📝 Se você quiser fazer edições no frontend, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões secundárias**

> 🏃 Vá para o próximo desafio aqui.
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no [💎Discord da Emerald City](https://discord.gg/emeraldcity)!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Poste-os no [💎Discord da Emerald City](https://discord.gg/emeraldcity)!
>