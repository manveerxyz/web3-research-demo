import environment from './env.config.production';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    mainnet: {
      url: environment.ethereumURL,
      accounts: [environment.privateKey],
    }
  },
  etherscan: {
    apiKey: {
      mainnet: environment.etherscanApiKey,
    }
  }
};

export default config;
