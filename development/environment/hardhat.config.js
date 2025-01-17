module.exports = {
  solidity: "0.8.0",
  networks: {
    ethereum: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
    // Add other networks as needed
  },
  paths: {
    sources: "./core-protocol/contracts",
    tests: "./core-protocol/tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};