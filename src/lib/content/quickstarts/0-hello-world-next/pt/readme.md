---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 0: Olá Mundo**

🎫 Implemente um contrato simples de HelloWorld para aprender o básico do blockchain Flow e da Cadence. Você usará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para entrar em contas de teste.
- Um aplicativo Next.js modelo com scripts e transações de amostra para interagir com seu contrato.

🌟 O resultado final é um DApp que permite aos usuários ler e alterar um campo de saudação no Flow testnet.

💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)**!

---

# **Vídeo explicativo**

Quer um vídeo explicativo? Confira o tutorial de Jacob Tucker aqui:

![https://i.imgur.com/mlDKsL6.jpg](https://i.imgur.com/mlDKsL6.jpg)

---

# **📦 Checkpoint 0: Instalar**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use o Node v16 ou uma versão anterior, pois o v17 pode causar erros 🧨). Você sabe que o instalou se digitar **`node -v`** no seu terminal e ele mostrar uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para o seu sistema 🧨). Você sabe que o instalou se digitar **`flow version`** no seu terminal e ele mostrar uma versão.

```sh
git clone https://github.com/emerald-dao/0-hello-world.git
```

> em uma janela do terminal, 📱 instale as dependências e inicie seu frontend:
> 

```sh
cd 0-hello-world
npm install
npm run dev
```

> em uma segunda janela do terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 0-hello-world
flow emulator start -v
```

*Nota: a opção **`-v`** significa imprimir a saída de transações e scripts no seu emulador local*

> em uma terceira janela do terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 0-hello-world
flow project deploy
flow dev-wallet

```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Entrar" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de tokens Flow. Selecione a primeira conta para fazer login.
> 

---

# **📘 Checkpoint 2: Lendo a Saudação**

> 👀 Clique no botão Get Greeting para ver a sua saudação:
> 

<img src="https://i.imgur.com/PsK32ap.png" alt="get greeting" />

---

# **✏️ Checkpoint 3: Alterando a Saudação**

> ✏️ Mude a saudação! Digite uma nova saudação no campo e clique no botão Change Greeting. Você deve ver uma transação aparecer:
> 

<img src="https://i.imgur.com/XByQNZ3.png" alt="transaction popup" />

> 👀 Clique em "APPROVE" e depois clique no botão Get Greeting novamente. Você deve ver sua nova saudação:
> 

<img src="https://i.imgur.com/cOW1PXB.png" alt="new greeting" />

---

# **💾 Checkpoint 4: Implemente no Testnet!**

📔 Pronto para implementar em um testnet público?!?

> 🔐 Gere um endereço de implementação digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, você precisará delas em breve.
> 

<img src="https://i.imgur.com/HbF4C73.png" alt="generate key pair" />

> 👛 Crie sua conta de implementação indo para https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/73OjT3K.png" alt="configure testnet account on the website" width="400" />

> Depois de terminar, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você vai precisar dele!
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
      "HelloWorld"
    ]
  },
  "testnet": {
    "testnet-account": [
      "HelloWorld"
    ]
  }
}
```

> 🚀 Implemente seu contrato inteligente HelloWorld:
> 

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/GBFs2Uz.png" alt="deploy contract to testnet" />

> Por último, configure seu arquivo .env para apontar para o Flow TestNet para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço testnet gerado
2. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
3. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nosso próprio blockchain local ou carteira. Tudo está no testnet!

> Execute npm run dev para iniciar sua aplicação em um terminal e divirta-se com seu DApp!
> 

---

# **📝 Faça edições!**

🔏 Você também pode verificar o seu contrato inteligente **`HelloWorld.cdc`** em **`flow/cadence/HelloWorld.cdc`**.

💼 Dê uma olhada rápida em como seu contrato é implantado em **`flow.json`**.

📝 Se você quiser fazer edições no frontend, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões Secundárias**

> 🏃 Siga para o seu próximo desafio aqui.
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Publique-os no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
>