require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Mainnet URL from Infura
      accounts: [process.env.PRIVATE_KEY], // Private key from .env
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Sepolia Testnet URL
      accounts: [process.env.PRIVATE_KEY], // Private key for Sepolia
    },
    // Add other networks if needed
  },
  paths: {
    sources: "./contracts/Ethereum",
    tests: "./tests/Ethereum",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
