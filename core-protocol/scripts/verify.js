require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    console.error("Please provide a contract address.");
    process.exit(1);
  }

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [], // Add constructor arguments if any
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });   