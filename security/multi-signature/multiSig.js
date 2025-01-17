const { ethers } = require("ethers");

class MultiSig {
    constructor(signers, required) {
        this.signers = signers;
        this.required = required;
        this.transactions = [];
        this.confirmations = {};
    }

    submitTransaction(to, value, data) {
        const tx = {
            to,
            value,
            data,
            id: this.transactions.length,
            confirmations: 0,
            executed: false,
        };
        this.transactions.push(tx);
        return tx.id;
    }

    confirmTransaction(txId, signer) {
        if (!this.signers.includes(signer)) {
            throw new Error("Not an authorized signer");
        }
        if (this.confirmations[txId] && this.confirmations[txId].includes(signer)) {
            throw new Error("Transaction already confirmed by this signer");
        }

        if (!this.confirmations[txId]) {
            this.confirmations[txId] = [];
        }
        this.confirmations[txId].push(signer);
        this.transactions[txId].confirmations++;

        if (this.transactions[txId].confirmations >= this.required) {
            this.executeTransaction(txId);
        }
    }

    executeTransaction(txId) {
        const tx = this.transactions[txId];
        if (tx.executed) {
            throw new Error("Transaction already executed");
        }
        // Logic to execute the transaction (e.g., sending funds)
        tx.executed = true;
    }

    getTransaction(txId) {
        return this.transactions[txId];
    }
}

module.exports = MultiSig;