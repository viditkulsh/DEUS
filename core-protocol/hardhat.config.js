require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config(); // Load environment variables from .env file

task("verify-contract", "Verifies a contract on Etherscan")
  .addParam("address", "The contract address")
  .setAction(async (taskArgs) => {
    await hre.run("verify:verify", {
      address: taskArgs.address,
      constructorArguments: [], // Add constructor arguments if any
    });
  });

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
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
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};  