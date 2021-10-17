import {
  ChainsType,
  CHAINS,
  PROTOCOL_STEPS_ID,
  SOLANA_PROTOCOLS,
  SOLANA_NETWORKS,
} from 'types';

export const GRID_LAYOUT = [13, 11];
export const HEADER_HEIGHT = 80;
export const FOOTER_HEIGHT = 90;

export const CHAINS_CONFIG: ChainsType = {
  [CHAINS.SOLANA]: {
    id: CHAINS.SOLANA,
    label: 'Solana',
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=010',
    protocol: SOLANA_PROTOCOLS.RPC,
    network: SOLANA_NETWORKS.DEVNET,
    active: true,
    steps: [
      {
        id: PROTOCOL_STEPS_ID.PROJECT_SETUP,
        title: 'Setup the project',
        skippable: true,
      },
      {
        id: PROTOCOL_STEPS_ID.CHAIN_CONNECTION,
        title: 'Connect to Solana',
      },
      {
        id: PROTOCOL_STEPS_ID.CREATE_ACCOUNT,
        title: 'Create an account',
      },
      {
        id: PROTOCOL_STEPS_ID.FUND_ACCOUNT,
        title: 'Fund the account with SOL',
      },
      {
        id: PROTOCOL_STEPS_ID.GET_BALANCE,
        title: 'Get the balance',
      },
      {
        id: PROTOCOL_STEPS_ID.TRANSFER_TOKEN,
        title: 'Transfer some SOL',
      },
      {
        id: PROTOCOL_STEPS_ID.DEPLOY_CONTRACT,
        title: 'Deploy a program',
      },
      {
        id: PROTOCOL_STEPS_ID.SOLANA_CREATE_GREETER,
        title: 'Create storage for the program',
      },
      {
        id: PROTOCOL_STEPS_ID.GET_CONTRACT_VALUE,
        title: 'Get data from the program',
      },
      {
        id: PROTOCOL_STEPS_ID.SET_CONTRACT_VALUE,
        title: 'Send data to the program',
      },
    ],
  },
};
