---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 2: Token Fungível**

🎫 Implemente um contrato FungibleToken para aprender os conceitos básicos do blockchain Flow e Cadence. Você utilizará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para fazer login em contas de teste.
- Um aplicativo modelo Next.js com scripts e transações de exemplo para interagir com seu contrato.

🌟 O resultado final é um DApp que permite aos usuários criar seu próprio token fungível e transferi-los para outra conta no testnet Flow.

💬 Encontre outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Emerald City Discord](https://discord.gg/emerald-city-906264258189332541)**!

---
# **Vídeo explicativo**

Quer um vídeo explicativo? Confira o tutorial de Jacob Tucker aqui:

![https://i.imgur.com/hbaBWoB.jpg](https://i.imgur.com/hbaBWoB.jpg)

---

# **📦 Ponto de verificação 0: Instalação**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use o Node v16 ou uma versão anterior, pois a v17 pode causar erros 🧨). Você sabe que o instalou se digitar **`node -v`** no terminal e ele imprimir uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para o seu sistema 🧨). Você sabe que o instalou se digitar **`flow version`** no terminal e ele imprimir uma versão.

```sh
git clone https://github.com/emerald-dao/2-fungible-token.git
```

> em uma janela do terminal, 📱 instale as dependências e inicie o frontend:
> 

```sh
cd 2-fungible-token
npm install
npm run dev
```

> em uma segunda janela do terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 2-fungible-token
flow emulator start -v
```

*Observação: a flag **`-v`** significa imprimir a saída de transação e script no seu emulador local*

> em uma terceira janela do terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 2-fungible-token
flow project deploy
flow dev-wallet
```

> Você pode usar flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Ponto de verificação 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Log In" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de Flow Token. Selecione a primeira conta para fazer login.
> 

---

# **📘 Ponto de verificação 2: Verificando seu saldo**

> Quando você fizer login, clique no pequeno spinner ao lado do seu saldo no canto superior direito. Observe que você recebe um erro:
> 

<img src="https://i.imgur.com/IIXjt8h.png" alt="erro ao obter saldo" width="400" />

O motivo desse erro é porque não configuramos um cofre na conta do usuário. No Flow, você precisa de um cofre em sua conta para armazenar tokens específicos. Vamos configurar isso agora.

> Clique no botão Configurar Cofre:
> 

<img src="https://i.imgur.com/4XEwntp.png" alt="configurar cofre para conta de usuário" width="400" />

Isso configurará a conta do usuário para que ela possa receber tokens.

> Tente atualizar o saldo novamente. Você verá um saldo de 0,0. Então, vamos emitir alguns tokens!
> 

---

# **✏️ Ponto de verificação 3: Emitindo Tokens Fungíveis**

> No terminal, execute npm run mint 0xf8d6e0586b0a20c7 30.0.
> 

<img src="https://i.imgur.com/hTEzmqe.png" alt="emitir tokens fungíveis" />

Isso emitirá 30 tokens para o endereço deles (**`0xf8d6e0586b0a20c7`**).

> Volte ao seu aplicativo e atualize o saldo novamente. Observe que você tem um saldo de 30,0 agora! Uhuuul.
> 

---

# **📘 Ponto de verificação 4: Configurar Cofre do Segundo Usuário**

Queremos transferir tokens para outra conta, mas o problema é que não temos outra conta (configurada corretamente) para transferir tokens!

> Faça logout da conta atual e faça login em outra conta. Atualize o saldo novamente. Você verá um erro aparecer:
> 

<img src="https://i.imgur.com/hmS1eYZ.png" alt="erro ao obter tokens" width="400" />

Novamente, isso ocorre porque não configuramos a conta do usuário. Faremos isso novamente clicando no botão **`Configurar Cofre`**:

<img src="https://i.imgur.com/4XEwntp.png" alt="configurar cofre para conta de usuário" width="400" />

Isso configurará a conta do usuário para que ela possa receber tokens.

> Tente atualizar o saldo novamente. Você verá um saldo de 0,0. Então, vamos transferir alguns da outra conta!
> 

---

# **💾 Ponto de verificação 5: Transferir Tokens**

> 📔 Faça logout da sua conta e volte para a Conta de Serviço. No campo principal, insira 0x179b6b1cb6755e31 como destinatário e 10.0 como valor, e clique em Transferir Tokens:
> 

<img src="https://i.imgur.com/guxcLRz.png" alt="transferir tokens" />

Isso transferirá tokens para a conta **`0x179b6b1cb6755e31`**. Faça login nessa conta, atualize o saldo e você verá que tem 10,0 tokens agora!

---

# **💾 Ponto de verificação 6: Implantar no testnet!**

📔 Pronto para implantar em um testnet público?!?

> 🔐 Gere um endereço de implantador digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, pois você precisará delas em breve.
> 

<img src="https://i.imgur.com/jU9sRiL.png" alt="gerar par de chaves" />

> 👛 Crie sua conta de implantador acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/OitvEoO.png" alt="configure conta de testnet no site" width="400" />

> Depois de concluir, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você vai precisar dele!
> 

> ⛽️ Adicione sua nova conta de testnet ao seu flow.json modificando as seguintes linhas de código. Cole o endereço que você copiou acima onde diz "SEU ENDEREÇO GERADO" e cole sua chave privada onde diz "SUA CHAVE PRIVADA".
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
			"ExampleToken"
		]
  },
  "testnet": {
    "testnet-account": [
      "ExampleToken"
    ]
  }
}
```
>
> 🚀 Implantar seu contrato inteligente ExampleToken:
> 

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/iTqfXeg.png" alt="implantar contrato no testnet" />

> Por último, configure seu arquivo .env para apontar para o TestNet do Flow para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço de testnet gerado
2. **`NEXT_PUBLIC_STANDARD_ADDRESS`** para **`0x9a0766d93b6608b7`**
3. **`PRIVATE_KEY`** para sua chave privada
4. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
5. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, já que não precisamos mais executar nosso próprio blockchain ou carteira local. Tudo está no testnet!

Vamos testar nosso DApp no testnet:

1. Execute **`npm run dev`** para iniciar seu aplicativo em um terminal.
2. Em **[http://localhost:3000/](http://localhost:3000/)**, clique em "conectar" e faça login na sua carteira Blocto ou Lilico, certificando-se de copiar o endereço com o qual você faz login.
3. Clique em "Configurar Cofre" para criar um cofre e a capacidade de armazenar tokens.
4. Em um terminal, execute **`npm run mint [O ENDEREÇO DA CONTA QUE VOCÊ ESTÁ LOGADO] [QUANTIDADE DE TOKENS]`**
5. No seu terminal, você deve ver um "Transaction Id" impresso. Se você acessar o **[Testnet Flowdiver](https://testnet.flowdiver.io)** e colar esse Transaction Id, verá informações sobre essa transação de emissão de tokens.
6. Atualize o saldo mais uma vez e você verá os tokens emitidos na sua conta :)

---

# **📝 Faça edições!**

🔏 Você também pode conferir seu contrato inteligente **`ExampleToken.cdc`** em **`flow/cadence/ExampleToken.cdc`**.

💼 Dê uma olhada rápida em como seu contrato é implantado em **`flow.json`**.

📝 Se você quiser fazer edições no frontend, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões Secundárias**

> 🏃 Vá para o próximo desafio aqui.
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
> 

> 👉 Problemas, perguntas, comentários sobre o stack? Publique-os no [💎Discord da Emerald City](https://discord.gg/emerald-city-906264258189332541)!
>