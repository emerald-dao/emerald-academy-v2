---
layout: examples
---

# 💎 Emerald Academy
## **🚩 Desafio 6: Grupos**

🎫 Implemente um contrato de subcomunidades para aprender o básico de votação dentro de uma DAO no blockchain Flow e Cadence. Você utilizará:

- O emulador local Flow para implantar contratos inteligentes.
- A carteira de desenvolvimento local Flow para entrar em contas de teste.
- Um aplicativo modelo Next.js com scripts e transações de exemplo para interagir com seu contrato.

🌟 O produto final é um DApp que permite aos usuários criar Grupos, entrar e sair deles, descobrir Grupos e conversar dentro deles.

💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no **[Discord da Cidade Esmeralda](https://discord.gg/emeraldcity)**!

---

# **📦 Checkpoint 0: Instalar**

Necessário:

- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/dist/latest-v16.x/)** (🧨 Use o Node v16 ou uma versão anterior, pois o v17 pode causar erros 🧨). Você saberá que o instalou se digitar **`node -v`** no seu terminal e ele imprimir uma versão.
- **[Flow CLI](https://docs.onflow.org/flow-cli/install/)** (🧨 Certifique-se de instalar o link correto para seu sistema 🧨). Você saberá que o instalou se digitar **`flow version`** no seu terminal e ele imprimir uma versão.

```sh
git clone https://github.com/emerald-dao/6-groups.git
```

> em uma janela de terminal, 📱 instale as dependências e inicie sua interface:
> 

```sh
cd 6-groups
npm install
npm run dev
```

> em uma segunda janela de terminal, inicie seu 👷‍ emulador local:
> 

```bash
cd 6-groups
flow emulator start -v
```

*Nota: o sinalizador **`-v`** significa imprimir a saída da transação e do script no seu emulador local*

> em uma terceira janela de terminal, 💾 implante seu contrato e 💸 inicie sua carteira local:
> 

```bash
cd 6-groups
flow project deploy
flow dev-wallet
```

> Você pode flow project deploy --update para implantar um novo contrato a qualquer momento.
> 

📱 Abra **[http://localhost:3000](http://localhost:3000/)** para ver o aplicativo

---

# **👛 Checkpoint 1: Carteiras**

Usaremos **a carteira de desenvolvimento local Flow**.

> Clique no botão "Fazer login" e observe que uma janela aparece com diferentes contas para selecionar, cada uma com seu próprio saldo de Flow Token. Selecione a primeira conta para fazer login nela.
> 
---
# **🔖 Checkpoint 2: Visualizando um Grupo**

Depois de fazer login em nosso DApp, você notará que já existe uma comunidade em funcionamento: Cidade Esmeralda!

<img src="https://i.imgur.com/gWlGUwh.png" alt="emerald city group" width="400" />

> Clique em Cidade Esmeralda
> 

Você será direcionado para uma página que mostra todos os detalhes da Cidade Esmeralda:

<img src="https://i.imgur.com/BIuoZPm.png" alt="group page" width="400" />

Como você está conectado à Conta de Serviço e essa conta é a proprietária deste grupo, você já faz parte da comunidade. Vamos tentar fazer login em uma conta diferente e entrar nesta comunidade.

---

# **👪 Checkpoint 3: Entrando em um Grupo**

Vamos entrar no grupo Cidade Esmeralda com uma conta diferente!

> No topo, clique em "Sair" e faça login novamente com a Conta A
> 

A Conta A não pertence a este grupo, então não podemos fazer coisas como ver o fórum do grupo.

> Para entrar, clique no botão "Participar da Comunidade" e você verá um modelo de transação aparecer:
> 

<img src="https://i.imgur.com/rFUkEKX.png" alt="join group" width="400" />

Se você clicar em "Aprovar", notará que seu endereço foi adicionado à lista de membros. Uhuu! Entramos com sucesso no grupo. Se quiser, você também pode sair do grupo.

---

# **📑 Checkpoint 4: Digite uma Mensagem**

Agora que entramos no grupo, podemos começar a usar o fórum!

> Digite uma mensagem no fórum da comunidade e clique em "Enviar". Você notará um popup de transação, clique em Aprovar.
> 

<img src="https://i.imgur.com/OKkFToc.png" alt="join group" width="400" />

Sua mensagem foi adicionada ao fórum da comunidade, armazenada completamente na blockchain!

---

# **👀 Checkpoint 5: Criar um grupo**

Para criar um grupo, volte à página principal e clique em "Criar grupo". Uma vez lá, você deve preencher:

- Uma imagem para o seu grupo
- O nome do seu grupo
- Uma descrição para o seu grupo

Você poderá visualizar seu novo grupo no lado direito:

<img src="https://i.imgur.com/yvZCW6P.png" alt="preview group" width="400" />

> Clique em "Criar grupo" para executar uma transação que criará o novo grupo on-chain
> 

Aparecerá um popup para criar sua nova proposta. Esta é uma transação que mudará dados no blockchain. Especificamente, está criando um novo recurso **`Group`** e armazenando-o em sua coleção de Grupos que você criou.

> Para ver como essa transação foi executada, confira a função createGroup dentro de ./pages/create.js
> 

> Para mais informações sobre Cadence & Resources, você pode ver o código do contrato em ./flow/cadence/Groups.cdc ou conferir nosso <a href="https://github.com/emerald-dao/beginner-cadence-course">Curso Básico de Cadence</a>
> 

Após clicar em "Aprovar", você será direcionado de volta ao painel principal. Agora você deve ver o seu grupo:

<img src="" alt="see your new group" width="400" />
---
# **💾 Checkpoint 6: Publique no testnet!**

📔 Pronto para publicar em um testnet público?!?

> 🔐 Gere um endereço de implantador digitando flow keys generate --network=testnet em um terminal. Certifique-se de salvar sua chave pública e chave privada em algum lugar, você precisará delas em breve.
> 

<img src="https://i.imgur.com/jU9sRiL.png" alt="generate key pair" />

> 👛 Crie sua conta de implantador acessando https://testnet-faucet.onflow.org/, colando sua chave pública acima e clicando em CREATE ACCOUNT:
> 

<img src="https://i.imgur.com/OitvEoO.png" alt="configure testnet account on the website" width="400" />

> Depois de terminar, clique em COPY ADDRESS e certifique-se de salvar esse endereço em algum lugar. Você vai precisar dele!
> 

> ⛽️ Adicione sua nova conta de testnet ao seu flow.json modificando as seguintes linhas de código. Cole seu endereço copiado acima onde diz "YOUR GENERATED ADDRESS" e cole sua chave privada onde diz "YOUR PRIVATE KEY".
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
      "Groups"
    ]
  },
  "testnet": {
    "testnet-account": [
      "Groups"
    ]
  }
}
```
> 🚀 Implantar seu contrato inteligente Vote:
> 

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/s899jKs.png" alt="deploy contract to testnet" />

> Por último, configure seu arquivo .env para apontar para o Flow TestNet para que possamos interagir com seu novo contrato.
> 

No seu arquivo .env, altere o seguinte:

1. **`NEXT_PUBLIC_CONTRACT_ADDRESS`** para o seu endereço de testnet gerado
2. **`NEXT_PUBLIC_ACCESS_NODE`** para **`https://rest-testnet.onflow.org`**
3. **`NEXT_PUBLIC_WALLET`** para **`https://fcl-discovery.onflow.org/testnet/authn`**

Agora você pode encerrar todos os seus terminais, pois não precisamos mais executar nosso próprio blockchain ou carteira local. Tudo está no testnet!

Vamos testar nossa aplicação no testnet:

1. Execute **`npm run dev`** para iniciar sua aplicação em um terminal.
2. Em **[http://localhost:3000/](http://localhost:3000/)**, clique em "conectar" e faça login na sua carteira Blocto ou Lilico.
3. Participe do grupo Emerald City executando a transação associada. Espere cerca de 30 segundos e atualize a página. Agora você deve estar no grupo.
4. Crie um novo grupo, como antes.
5. Converse em qualquer grupo de sua escolha.

---

# **Armazenando assets de imagem**

Você deve estar se perguntando: como você está armazenando imagens? Para onde elas vão?

Graças aos nossos incríveis apoiadores da <a href="https://filecoin.io/">Filecoin</a>, decidimos usar o <a href="https://nft.storage/">NFT.Storage</a> para armazenar nossos assets de imagem no IPFS. O NFT.Storage permite que você faça upload de uma imagem e, em troca, fornece o que é chamado de "CID", ou uma longa lista de números e letras aleatórios. Você pode usar isso para buscar sua imagem a partir de uma URL e exibi-la corretamente.

Isso também é especialmente útil quando pensamos nos custos de armazenamento. Nunca queremos armazenar imagens diretamente em nosso contrato inteligente porque isso seria caro (ter que armazenar centenas de Megabytes ou potencialmente Gigabytes). Em vez disso, armazenamos o CID, que é apenas uma pequena string e muito mais barata.

Veja como é simples armazenar imagens no IPFS em seu código:
1. **`npm install nft.storage`**
2. Vá para <a href="https://nft.storage/">NFT.Storage</a> > Login > API Keys > + New Key > Actions > Copy
3. Cole sua chave no arquivo **`.env`**
4. Adicione o seguinte código no nosso arquivo **`/pages/create.js`**:

```jsx
import { NFTStorage } from "nft.storage";

const [preview, setPreview] = useState('');
const [ipfsCid, setIpfsCid] = useState('');

const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFTSTORAGE_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

async function uploadToIPFS(file) {
  let prev = URL.createObjectURL(file)
  setPreview(prev)
  const cid = await client.storeBlob(file);
  setIpfsCid(cid);
}

```

1. Armazene o CID IPFS no código do seu contrato inteligente. Dentro de **`/flow/cadence/Groups.cdc`**, confira a variável **`image`** na estrutura **`GroupInfo`**. Ela armazena o CID IPFS.

# **📝 Faça edições!**

🔏 Você também pode conferir o contrato inteligente dos grupos **`Groups.cdc`** em **`flow/cadence/Groups.cdc`**.

💼 Dê uma rápida olhada em como seu contrato é implantado em **`flow.json`**.

📝 Se você quiser fazer edições no frontend, abra **`index.js`** em **`pages/index.js`**.

# **⚔️ Missões secundárias**

> 🏃 Mais desafios em breve...
> 

> 💬 Conheça outros desenvolvedores trabalhando neste desafio e obtenha ajuda no 💎 [Discord da Emerald City](https://discord.gg/emeraldcity)!
> 

> 👉 Problemas, perguntas, comentários sobre a pilha? Publique-os no 💎 [Discord da Emerald City](https://discord.gg/emeraldcity)!
>