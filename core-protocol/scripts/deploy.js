const hre = require("hardhat");

async function main() {
    // Deploy Relay Contract on Ethereum
    const EthereumRelayContract = await hre.ethers.getContractFactory("RelayContract");
    const ethereumRelay = await EthereumRelayContract.deploy();
    await ethereumRelay.deployed();
    console.log("Ethereum Relay Contract deployed to:", ethereumRelay.address);

    // Deploy Relay Contract on Solana
    // Note: Solana deployment requires a different approach, typically using Anchor CLI
    // This is a placeholder for the Solana deployment process
    console.log("Deploy Solana Relay Contract using Anchor CLI");

    // Additional deployment logic can be added here
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });