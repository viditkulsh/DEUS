const { ethers } = require("hardhat");

async function verifyContract(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
        console.log("Contract verified successfully!");
    } catch (error) {
        console.error("Error verifying contract:", error);
    }
}

async function main() {
    const contractAddress = process.argv[2];
    const args = process.argv.slice(3);

    if (!contractAddress) {
        console.error("Please provide a contract address.");
        process.exit(1);
    }

    await verifyContract(contractAddress, args);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });