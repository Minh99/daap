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
    logoUrl: '',
    protocol: SOLANA_PROTOCOLS.RPC,
    network: SOLANA_NETWORKS.DEVNET,
    active: true,
    steps: [
      {
        id: PROTOCOL_STEPS_ID.CHAIN_CONNECTION,
        title: 'Connect to Solana',
        skippable: true,
      },
      {
        id: PROTOCOL_STEPS_ID.GET_BALANCE,
        title: 'Get the balance',
      },
      {
        id: PROTOCOL_STEPS_ID.TRANSFER_TOKEN,
        title: 'Transfer some SOL',
      },
    ],
  },
};
