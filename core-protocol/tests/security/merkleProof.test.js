const { MerkleTree } = require('merkletreejs');
const { keccak256 } = require('ethers/lib/utils');
const { expect } = require('chai');

describe('MerkleProof', function () {
    let merkleTree;
    let leaves;
    let root;

    beforeEach(function () {
        leaves = ['a', 'b', 'c'].map(x => keccak256(x));
        merkleTree = new MerkleTree(leaves, keccak256, { sort: true });
        root = merkleTree.getRoot();
    });

    it('should verify a valid Merkle proof', function () {
        const leaf = keccak256('a');
        const proof = merkleTree.getProof(leaf);
        const isValid = merkleTree.verify(proof, leaf, root);
        expect(isValid).to.be.true;
    });

    it('should not verify an invalid Merkle proof', function () {
        const leaf = keccak256('a');
        const proof = merkleTree.getProof(leaf);
        proof[0].data = Buffer.from('invalid data'); // tamper with proof
        const isValid = merkleTree.verify(proof, leaf, root);
        expect(isValid).to.be.false;
    });

    it('should return the correct Merkle root', function () {
        expect(root).to.equal(merkleTree.getRoot());
    });
});