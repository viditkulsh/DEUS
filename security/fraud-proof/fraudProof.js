const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak');

// Function to create a Merkle proof for a given leaf
function createMerkleProof(leaf, leaves) {
    const tree = new MerkleTree(leaves, (data) => keccak256(data), { sort: true });
    return tree.getHexProof(leaf);
}

// Function to verify a Merkle proof
function verifyMerkleProof(leaf, proof, root) {
    const leafHash = keccak256(leaf);
    return MerkleTree.verify(proof, leafHash, root);
}

// Example usage
const leaves = ['a', 'b', 'c', 'd'].map(x => keccak256(x));
const tree = new MerkleTree(leaves, (data) => keccak256(data), { sort: true });
const root = tree.getRoot().toString('hex');

const leaf = keccak256('a');
const proof = createMerkleProof(leaf, leaves);
const isValid = verifyMerkleProof(leaf, proof, root);

module.exports = {
    createMerkleProof,
    verifyMerkleProof,
    root,
    isValid
};