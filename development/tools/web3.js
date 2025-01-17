const Web3 = require('web3');

class Web3Utils {
    constructor(providerUrl) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
    }

    async getBalance(address) {
        return await this.web3.eth.getBalance(address);
    }

    async sendTransaction(transaction) {
        return await this.web3.eth.sendTransaction(transaction);
    }

    async callContractMethod(contractAddress, abi, methodName, ...args) {
        const contract = new this.web3.eth.Contract(abi, contractAddress);
        return await contract.methods[methodName](...args).call();
    }

    async estimateGas(transaction) {
        return await this.web3.eth.estimateGas(transaction);
    }
}

module.exports = Web3Utils;