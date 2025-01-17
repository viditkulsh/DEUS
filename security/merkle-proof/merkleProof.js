const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak');

class MerkleProof {
    constructor(leaves) {
        this.tree = new MerkleTree(leaves, keccak256, { sort: true });
    }

    getRoot() {
        return this.tree.getRoot().toString('hex');
    }

    getProof(leaf) {
        return this.tree.getProof(leaf).map(x => x.data.toString('hex'));
    }

    verifyProof(proof, leaf, root) {
        return this.tree.verify(proof, leaf, root);
    }
}

module.exports = MerkleProof;