---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 1: NonFungibleToken**

🎫 Implemente seu próprio contrato NFT para aprender o básico do blockchain Flow e do Cadence. Você usará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para fazer login em contas de teste.
- Um aplicativo modelo Next.js com scripts e transações de amostra para interagir com seu contrato.

🌟 O resultado final é um DApp que permite aos usuários criar uma coleção vazia, emitir alguns NFTs pré-carregados e transferi-los para outra conta no testnet Flow.

💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)**!

---

# **Video Walkthrough**

Deseja um vídeo passo a passo? Confira o walkthrough de Jacob Tucker aqui:

![https://i.imgur.com/BmiGz8T.jpg](https://i.imgur.com/BmiGz8T.jpg)

---

# **📦 Checkpoint 0: Instalação**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use Node v16 ou uma versão anterior, pois a v17 pode causar erros 🧨). Você saberá que instalou corretamente se digitar **`node -v`** no terminal e ele exibir uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para o seu sistema 🧨). Você saberá que instalou corretamente se digitar **`flow version`** no terminal e ele exibir uma versão.

```sh
git clone https://github.com/emerald-dao/1-non-fungible-token.git
```

> em uma janela de terminal, 📱 instale as dependências e inicie seu frontend:
> 

```sh
cd 1-non-fungible-token
npm install
npm run dev
```

> em uma segunda janela de terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 1-non-fungible-token
flow emulator start -v

```

*Obs.: a flag **`-v`** significa imprimir a saída de transações e scripts no seu emulador local*

> em uma terceira janela de terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 1-non-fungible-token
flow project deploy
flow dev-wallet

```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Log In" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de Flow Token. Selecione a primeira conta para fazer login.
> 

---

# **👀 Checkpoint 2: Veja seus NFTs**

> Após fazer login na conta com endereço 0xf8d6e0586b0a20c7, clique no botão Get NFTs. Observe que você recebe um erro:
> 

<img src="https://i.imgur.com/aM6gV2G.png" alt="erro ao obter NFTs" width="400" />

A razão para isso é que não configuramos a conta do usuário para poder receber NFTs. No Flow, as contas precisam ter uma coleção em sua conta para armazenar NFTs específicos. Vamos configurar isso agora.

> Clique no botão Setup Collection:
> 

<img src="https://i.imgur.com/VvaLKkW.png" alt="configurar coleção para conta de usuário" width="400" />

Isso configurará a conta do usuário para que ela possa receber NFTs.

> Tente clicar em Get NFTs. Você verá que nenhum NFT aparece. Então, vamos emitir alguns NFTs!
> 

# **✏️ Checkpoint 3: Cunhando os NFTs**

Agora que configuramos a conta do usuário, podemos emitir alguns NFTs para ela.

> Em um terminal, execute npm run mint 0xf8d6e0586b0a20c7
> 

<img src="https://i.imgur.com/4JrUbw1.png" alt="transação de cunhagem de NFTs" />

Isso emitirá 3 NFTs para o endereço fornecido (**`0xf8d6e0586b0a20c7`**).

> Volte ao seu aplicativo e clique em Get NFTs novamente. Observe que 3 NFTs aparecem! Uhuuuu.
> 

<img src="https://i.imgur.com/CZSwxxJ.png" alt="NFTs agora aparecem no frontend" />

---

# **📘 Checkpoint 4: Configurar coleção vazia do usuário**

> Faça logout da conta atual e faça login em outra conta. Clique em Get NFTs novamente. Você verá um erro aparecer:
> 

<img src="https://i.imgur.com/GjCa4NF.png" alt="erro ao obter NFTs" width="400" />

Novamente, isso ocorre porque não configuramos a conta do usuário. Faremos isso novamente clicando no botão **`Setup Collection`**:

<img src="https://i.imgur.com/VvaLKkW.png" alt="configurar coleção para conta de usuário" width="400" />

Isso configurará a conta do usuário para que ela possa receber NFTs.

> Tente clicar em Get NFTs. Você verá que nenhum NFT aparece. Então, vamos transferir alguns da outra conta!
> 

---

# **💾 Checkpoint 5: Transferir um NFT**

> 📔 Desconecte-se da sua conta e volte para a Conta de Serviço. Em uma das caixas de NFT, copie e cole 0x179b6b1cb6755e31 e clique em Transferir:
> 

<img src="https://i.imgur.com/i3r1GVa.png" alt="transferir um NFT" />

Isso transferirá um NFT para a conta **`0x179b6b1cb6755e31`**. Faça login nessa conta, clique em **`Obter NFTs`**, e você verá que ela tem um NFT agora!

---

# **💾 Checkpoint 6: Implemente no testnet!**

📔 Pronto para implantar em um testnet público?!?

> 🔐 Gere um endereço de implementação digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, pois você precisará delas em breve.
> 

<img src="https://i.imgur.com/Rf0f1ox.png" alt="gerar par de chaves" />

> 👛 Crie sua conta de implementação acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT (Criar conta):
> 

<img src="https://i.imgur.com/mkNCf1o.png" alt="configurar conta de testnet no site" width="400" />

> Depois de terminar, clique em COPY ADDRESS (Copiar endereço) e certifique-se de salvar esse endereço em algum lugar. Você precisará dele!
> 

> ⛽️ Adicione sua nova conta de testnet ao seu flow.json, modificando as seguintes linhas de código. Cole seu endereço copiado acima onde diz "YOUR GENERATED ADDRESS" (Seu endereço gerado) e cole sua chave privada onde diz "YOUR PRIVATE KEY" (Sua chave privada).
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
      "NonFungibleToken",
      "MetadataViews",
      "ExampleNFT"
		]
  },
  "testnet": {
    "testnet-account": [
      "ExampleNFT"
    ]
  }
}
```

Observe que não queremos implantar novamente NonFungibleToken ou MetadataViews. Isso ocorre porque eles já estão implantados e ativos no testnet do Flow!

🚀 Implante seu contrato inteligente ExampleNFT:

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/9rfZNhr.png" alt="implantar contrato no testnet" />

> Por último, configure seu arquivo .env para apontar para o Flow TestNet para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço de testnet gerado
2. **`NEXT_PUBLIC_STANDARD_ADDRESS`** para **`0x631e88ae7f1d7c20`**
3. **`PRIVATE_KEY`** para sua chave privada
4. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
5. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nosso próprio blockchain ou carteira local. Tudo está no testnet!

Vamos testar nosso DApp no testnet:

1. Execute **`npm run dev`** para iniciar seu aplicativo em um terminal.
2. Em **`http://localhost:3000/`**, clique em "connect" e faça login na sua carteira Blocto ou Lilico, certificando-se de copiar o endereço com o qual você faz login.

<img src="https://i.imgur.com/dvYO2aU.png" alt="fazendo login no discovery" />

1. Clique em "Setup Collection" para dar a si mesmo uma coleção e a capacidade de armazenar NFTs na sua conta.
2. Em um terminal, execute **`npm run mint [THE ADDRESS OF THE ACCOUNT YOU'RE LOGGED IN TO]`** (O ENDEREÇO DA CONTA QUE VOCÊ ESTÁ LOGADO)
3. No seu terminal, você deve ver um "Transaction Id" impresso. Se você acessar **[Testnet Flowdiver](https://testnet.flowdiver.io)** e colar esse Transaction Id, você verá informações sobre essa transação de cunhagem.
4. Clique em "Get NFTs" (Obter NFTs) e você verá todos os seus NFTs na sua conta!

---

# **📝 Faça edições!**

🔏 Você também pode verificar seu contrato inteligente **`ExampleNFT.cdc`** em **`flow/cadence/ExampleNFT.cdc`**.

💼 Dê uma olhada rápida em como seu contrato é implantado em **`flow.json`**.

📝 Se você quiser fazer edições no frontend, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões paralelas**

> 🏃 Vá para o seu próximo desafio aqui.
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Poste-os no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
>