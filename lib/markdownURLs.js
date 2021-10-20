const MARKDOWN_BASE_URL = 'https://raw.githubusercontent.com';
const MARKDOWN_BASE_ORGANISATION = '/figment-networks';
const MARKDOWN_BASE_REPOSITORY = '/datahub-learn';
const MARKDOWN_BASE_BRANCH = '/master';
const MARKDOWN_BASE_DIRECTORY = '/figment-learn/new-pathways';
const MARKDOWN_URI =
  MARKDOWN_BASE_URL +
  MARKDOWN_BASE_ORGANISATION +
  MARKDOWN_BASE_REPOSITORY +
  MARKDOWN_BASE_BRANCH +
  MARKDOWN_BASE_DIRECTORY;

const markdownUrls = {
  solana: {
    PROJECT_SETUP: `${MARKDOWN_URI}/solana/solana-setup.md`,
    CHAIN_CONNECTION: `${MARKDOWN_URI}/solana/solana-01-connect.md`,
    CREATE_ACCOUNT: `${MARKDOWN_URI}/solana/solana-02-account.md`,
    FUND_ACCOUNT: `${MARKDOWN_URI}/solana/solana-03-fund.md`,
    GET_BALANCE: `${MARKDOWN_URI}/solana/solana-04-balance.md`,
    TRANSFER_TOKEN: `${MARKDOWN_URI}/solana/solana-05-transfer.md`,
    DEPLOY_CONTRACT: `${MARKDOWN_URI}/solana/solana-06-deploy.md`,
    SOLANA_CREATE_GREETER: `${MARKDOWN_URI}/solana/solana-07-greeter.md`,
    GET_CONTRACT_VALUE: `${MARKDOWN_URI}/solana/solana-08-getvalue.md`,
    SET_CONTRACT_VALUE: `${MARKDOWN_URI}/solana/solana-09-setvalue.md`,
  },
};

module.exports = markdownUrls;
