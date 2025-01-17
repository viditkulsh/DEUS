const { ethers } = require("ethers");

// Utility function to create a provider
function createProvider(rpcUrl) {
    return new ethers.providers.JsonRpcProvider(rpcUrl);
}

// Utility function to create a wallet
function createWallet(privateKey, provider) {
    return new ethers.Wallet(privateKey, provider);
}

// Utility function to send a transaction
async function sendTransaction(wallet, to, value) {
    const tx = {
        to: to,
        value: ethers.utils.parseEther(value.toString()),
    };
    const transactionResponse = await wallet.sendTransaction(tx);
    await transactionResponse.wait();
    return transactionResponse;
}

// Utility function to get the balance of an address
async function getBalance(provider, address) {
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
}

// Exporting utility functions
module.exports = {
    createProvider,
    createWallet,
    sendTransaction,
    getBalance,
};