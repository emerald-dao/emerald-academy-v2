---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 3: Cunhagem de NFTs**

🎫 Configure sua própria coleção de NFTs e site de cunhagem enquanto aprende os fundamentos do blockchain Flow e Cadence. Você usará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para fazer login em contas de teste.
- Um aplicativo Next.js modelo com scripts e transações de exemplo para interagir com seu contrato.

🌟 O resultado final é um DApp que permite que um administrador crie uma coleção de NFTs e exiba NFTs disponíveis para compra em um site de cunhagem. Os usuários também poderão ver seus NFTs adquiridos.

💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Emerald City Discord](https://discord.gg/emeraldcity)**!

---

# **Vídeo tutorial**

Quer um vídeo tutorial? Confira o tutorial do Jacob Tucker aqui: EM BREVE

---

# **📦 Checkpoint 0: Instalação**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use Node v16 ou uma versão anterior, pois a v17 pode causar erros 🧨). Você sabe que instalou se digitar **`node -v`** no terminal e ele exibir uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para seu sistema 🧨). Você sabe que instalou se digitar **`flow version`** no terminal e ele exibir uma versão.

```sh
git clone https://github.com/emerald-dao/3-nft-minting.git
```

> em uma janela do terminal, 📱 instale as dependências e inicie sua interface:
> 

```sh
cd 3-nft-minting
npm install
npm run dev
```

> em uma segunda janela do terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 3-nft-minting
flow emulator start -v
```

*Nota: a opção **`-v`** significa imprimir a saída de transação e script no emulador local*

> em uma terceira janela do terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 3-nft-minting
flow project deploy
flow dev-wallet
```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Conectar" e observe uma janela aparecer com diferentes contas para selecionar, cada uma com seu próprio saldo de tokens Flow. Selecione a primeira conta para fazer login.
> 

---

# **✏️ Checkpoint 2: Cunhando alguns NFTs**

Antes de permitir que os usuários comprem NFTs, temos que cunhá-los primeiro!

> Em um terminal, execute npm run mint
> 

<img src="https://i.imgur.com/zhxWHyY.png" alt="mint NFTs transaction" />

Isso irá cunhar 3 NFTs e armazená-los no contrato. Eles estarão prontos para serem comprados.

> Volte ao seu aplicativo e atualize a página. Agora você verá alguns NFTs disponíveis para compra!
> 

<img src="https://i.imgur.com/s5uAUMW.png" alt="NFTs now appear on the frontend" />

---

# **📘 Checkpoint 3: Comprar NFTs**

Agora que há NFTs disponíveis para compra, podemos prosseguir e comprar alguns NFTs.

> Certifique-se de fazer login na Conta de Serviço, já que essa conta já possui muitos tokens Flow para comprar.
> 

> Clique em Comprar em qualquer um dos NFTs disponíveis.
> 

<img src="https://i.imgur.com/rOsj53Y.png" alt="purchase nft tx" width="400" />

Se você clicar em aprovar, verá que o NFT é retirado do mercado com sucesso e colocado na categoria "NFTs comprados":

<img src="https://i.imgur.com/aMv2KOI.png" alt="nft is now purchased" />

---

# **💾 Checkpoint 4: Financiando uma conta**

Antes de tentarmos comprar com outra conta, temos que ter certeza de que eles têm tokens Flow suficientes para comprar.

> Faça logout se já estiver logado, clique em "Conectar" e clique em "Gerenciar" ao lado da Conta A:
> 

<img src="https://i.imgur.com/7qb3yVZ.png" alt="manage button" />

> Clique em "Financiar" algumas vezes e depois pressione "Salvar"
> 

<img src="https://i.imgur.com/9Elc5W5.png" alt="fund account" />

Agora você terá Flow suficiente para comprar com a Conta A. Tente comprar um NFT!

Após comprar um NFT, você deve notar que o saldo da conta diminui.

---

# **💾 Checkpoint 5: Implemente no testnet!**

📔 Pronto para implantar em uma testnet pública ?!?

> 🔐 Gere um endereço de implantador digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, você precisará delas em breve.
> 

<img src="https://i.imgur.com/Rf0f1ox.png" alt="generate key pair" />

> 👛 Crie sua conta de implantador acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/mkNCf1o.png" alt="configure testnet account on the website" width="400" />

> Depois de terminar, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você vai precisar dele!
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

Note que não queremos implantar novamente NonFungibleToken ou MetadataViews. Isso ocorre porque eles já estão implantados e funcionando no testnet do Flow!

> 🚀 Implante seu contrato inteligente ExampleNFT:
> 

```sh
flow project deploy --network=testnet

```

<img src="https://i.imgur.com/9rfZNhr.png" alt="deploy contract to testnet" />

> Por último, configure seu arquivo .env para apontar para o Flow TestNet para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço de teste gerado
2. **`NEXT_PUBLIC_NFT_STANDARD_ADDRESS`** para **`0x631e88ae7f1d7c20`**
3. **`NEXT_PUBLIC_TOKEN_STANDARD_ADDRESS`** para **`0x9a0766d93b6608b7`**
4. **`NEXT_PUBLIC_FLOW_TOKEN_ADDRESS`** para **`0x7e60df042a9c0868`**
5. **`PRIVATE_KEY`** para sua chave privada
6. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
7. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nosso próprio blockchain ou carteira local. Tudo está no testnet!

Vamos testar nosso DApp no testnet:

1. Execute **`npm run dev`** para iniciar seu aplicativo em um terminal.
2. Em **`http://localhost:3000/`**, clique em "conectar" e faça login na sua carteira Blocto ou Lilico, certificando-se de copiar o endereço com o qual você faz login.

<img src="https://i.imgur.com/dvYO2aU.png" alt="logging into discovery" />

1. Em um terminal, execute **`npm run mint`**
2. No seu terminal, você deve ver um "Transaction Id" impresso. Se você for para **[Testnet Flowscan](https://testnet.flowscan.org/)** e colar esse Transaction Id, você deverá ver informações sobre essa transação de cunhagem.
3. Agora você deve ver todos os NFTs disponíveis para compra!
- Nota: Se você deseja financiar uma conta de teste com tokens Flow para testar seu aplicativo, pode usar a **[Testnet Faucet](https://testnet-faucet.onflow.org/fund-account)**

---

# **📝 Faça edições!**

🔏 Você também pode conferir seu contrato inteligente **`ExampleNFT.cdc`** em **`flow/cadence/ExampleNFT.cdc`**.

💼 Dê uma olhada rápida em como seu contrato é implantado no **`flow.json`**.

📝 Se você deseja fazer edições no frontend, abra o arquivo **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões paralelas**

> 🏃 Siga para o próximo desafio aqui.
> 

> 💬 Encontre outros desenvolvedores trabalhando neste desafio e obtenha ajuda no 💎 Discord Emerald City!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Publique-os no 💎 Discord Emerald City.
>