# 👋🏼 What is `learn-web3-dapp`?

We made this decentralized application (dApp) to help developers learn about Web 3 protocols.

It's a Next.js app that uses React, TypeScript and various smart contract languages (mostly Solidity and Rust).

We will guide you through using the various blockchain JavaScript SDKs to interact with their networks. Each protocol is slightly different, but we have attempted to standardize the workflow so that you can quickly get up to speed on networks like Solana, NEAR, Polygon and more!

- ✅ Solana
- ✅ Polygon
- ✅ Avalanche
- ✅ NEAR
- ✅ Tezos
- ✅ Secret
- ✅ Polkadot
- ✅ Celo
- ✅ Ceramic
- ✅ The Graph
- 🔜 Arweave
- 🔜 Chainlink
- 🔜 Pyth
- [Let us know which one you'd like us to cover](https://github.com/figment-networks/learn-web3-dapp/issues)

<img width="1024" alt="Screen Shot 1" src="https://raw.githubusercontent.com/figment-networks/learn-web3-dapp/main/markdown/__images__/readme-01.png">

<img width="1024" alt="Screen Shot 2" src="https://raw.githubusercontent.com/figment-networks/learn-web3-dapp/main/markdown/__images__/readme-02.png">

<img width="1024" alt="Screen Shot 3" src="https://raw.githubusercontent.com/figment-networks/learn-web3-dapp/main/markdown/__images__/readme-03.png">

# 🧑‍💻 Get started

## 🐑 Clone locally

Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node](https://nodejs.org/en/) (you'll need `v14.17.0` or greater) and [yarn](https://yarnpkg.com/getting-started/install) installed. Then clone the repo and run `yarn` in the project directory to install the dependencies:

```text
git clone https://github.com/figment-networks/learn-web3-dapp.git
cd learn-web3-dapp
yarn add @solana/wallet-adapter-wallets \
         @solana/wallet-adapter-base \
         @solana/wallet-adapter-react \
         @solana/wallet-adapter-react-ui \
         @solana/web3.js \
         react
yarn
```

Start the Next.js development server on the default port 3000 with:

```text
yarn dev
```

# 🤝 Feedback and contributing

If you encounter any errors during this process, please join our [Discord](https://figment.io/devchat) for help.

Feel free to also open an Issue or a Pull Request on the repo itself.

We hope you enjoy our Web 3 education dApps 🚀

-- ❤️ The Figment Learn Team

# deploy

computer Set up the Solana CLI Install Rust and Solana CLI

- curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
- source $HOME/.cargo/env
  Install Solana CLI v1.6.6 or later :

- sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
  Set up Solana CLI

- solana config set --url https://api.devnet.solana.com

- mkdir solana-wallet

- solana-keygen new --outfile solana-wallet/keypair.json

You will need SOL available in the account to deploy the program, so get an airdrop with:

- solana airdrop 1 $(solana-keygen pubkey solana-wallet/keypair.json)
  Verify that everything is ok:

- solana config get
- solana account $(solana-keygen pubkey solana-wallet/keypair.json)

Deploy a Solana program

- yarn run solana:build:program
- solana deploy -v --keypair solana-wallet/keypair.json dist/solana/program/helloworld.so
  On success, the CLI will print the programId of the deployed contract.

RPC URL: https://api.devnet.solana.com Default Signer Path: solana-wallet/keypair.json Commitment: confirmed Program Id: progran ID
