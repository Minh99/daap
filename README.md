# 👋🏼 What is `learn-web3-dapp`?

We made this decentralized application (dApp) to help developers learn about Web 3 protocols.

It's a Next.js app that used React, TypeScript and various smart contract languages (mostly Solidity and Rust).

We will guide you to build up a simple web client using the various blockchain's JavaScript SDKs to interact with their networks. Each protocol is slightly different, but we have attempted to standardize the workflow so that you can quickly get up to speed on networks like Solana, NEAR, Polygon and more!

- ✅ Solana
- ✅ Polygon
- ✅ Avalanche
- ✅ NEAR
- ✅ Tezos
- ✅ Secret
- ✅ Polkadot
- ✅ Ceramic
- 🔜 The Graph
- 🔜 Arweave
- 🔜 Chainlink
- 🔜 Pyth
- [Let us know which one you'd like us to cover](https://github.com/figment-networks/learn-web3-dapp/issues)

<img width="1431" alt="Screen Shot 2021-10-08 at 9 13 07 AM" src="https://user-images.githubusercontent.com/206753/136563367-1c51c133-c7f1-47f7-a692-acab734cec37.png">

![Screen Shot 2021-09-29 at 11 14 55 AM](https://user-images.githubusercontent.com/206753/135325747-330e9b28-14ee-4a32-9d7c-4216f82dd8c7.png)

<img width="1611" alt="Screen Shot 2021-10-12 at 9 08 23 AM" src="https://user-images.githubusercontent.com/206753/136962097-0be3a2cd-dc2e-44c5-ab5f-69baceff003e.png">

# 🧑‍💻 Get started

Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node](https://nodejs.org/en/) (you'll need `v14.17.0` or greater) and [yarn](https://yarnpkg.com/getting-started/install) installed. Then clone the repo and run the `yarn` command to install the dependencies:

```
git clone https://github.com/figment-networks/learn-web3-dapp.git
cd learn-web3-dapp
yarn
```

Start the Next.js development server on the default port 3000 with:

```
yarn dev
```

# 🤝 Feedback and contributing

If you encounter any errors during this process, please join our [Discord](https://figment.io/devchat) for help.

Feel free to also open an Issue or a Pull Request on the repo itself.

We hope you enjoy our Web 3 education dApps 🚀

-- The Figment Learn Team


# deploy 
💻 Set up the Solana CLI
Install Rust and Solana CLI
So far we've been using Solana's JS API to interact with the blockchain. In this chapter we're going to deploy a Solana program using another Solana developer tool: their Command Line Interface (CLI). We'll install it and use it through our Terminal.
For simplicity, perform both of these installations inside the project root (/learn-web3-dapp/):
Install the latest Rust stable :
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
Developers using macOS may want to use the following commands instead:
curl https://sh.rustup.rs -sSf | bash -s -- -y --no-modify-path
source $HOME/.cargo/env
Install Solana CLI v1.6.6 or later :
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
Set up Solana CLI
We need to configure the Solana cluster, create an account, request an airdrop and check that everything is functioning properly.
Set the CLI config URL to the devnet cluster:
solana config set --url https://api.devnet.solana.com
Next, we're going to generate a new keypair using the CLI. Run the following command in your Terminal :
NOTE: Make sure you're running these commands from the /learn-web3-dapp/ directory, which is the root directory of the repository.
mkdir solana-wallet
solana-keygen new --outfile solana-wallet/keypair.json
You will need SOL available in the account to deploy the program, so get an airdrop with:
solana airdrop 1 $(solana-keygen pubkey solana-wallet/keypair.json)
NOTE: In a Windows terminal, the $( ) syntax does not work, so just paste the public key you want to fund after the airdrop amount (for example: solana airdrop 1 C1qx2QUZq7EyLZao4U98fRb8HkT3X5fsGWUc25VyCRBn).
Verify that everything is ok:
solana config get
solana account $(solana-keygen pubkey solana-wallet/keypair.json)
🧩 Deploy a Solana program
The program we're going to deploy is an easy but pretty complete program. This program keeps track of the number of times an account has sent a greeting instruction to it.
Building the program
The first thing we're going to do is compile the Rust program to prepare it for the CLI. To do this we're going to use a custom script that's defined in package.json. Let's run the script and build the program by running the following command in the terminal (from the project root directory):
This step can take a few minutes!
yarn run solana:build:program
When it's successful, you will see the instructions to execute the deploy command with the path to the compiled program named helloworld.so. While this would work, we want to specify the keypair we generated just for this purpose, so read on.
To deploy this program:
  $ solana program deploy /home/zu/project/figment/learn-web3-dapp/dist/solana/program/helloworld.so
Done in 1.39s.
The .so extension does not stand for Solana! It stands for "shared object". You can learn more about Solana Programs in the developer documentation.
Deploying the program
Now we're going to deploy the program to the devnet cluster. The CLI provides a simple interface for this, solana deploy:
NOTE: Make sure you're running this command from the /learn-web3-dapp/ directory, which is the root directory of the repository (otherwise, you would need to change the paths to the keypair.json and the helloworld.so file).
solana deploy -v --keypair solana-wallet/keypair.json dist/solana/program/helloworld.so
The -v Verbose flag is optional, but it will show some related information like the RPC URL and path to the default signer keypair, as well as the expected Commitment level. When the process completes, the Program Id will be displayed :
On success, the CLI will print the programId of the deployed contract.
RPC URL: https://api.devnet.solana.com
Default Signer Path: solana-wallet/keypair.json
Commitment: confirmed
Program Id: 7KwpCaaYXRsjfCTvf85eCVuZDW894zZNN38UMxMpQoaQ
