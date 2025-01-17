pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MessageVerification {
    using MerkleProof for bytes32[];

    function verifyMessage(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf
    ) public pure returns (bool) {
        return proof.verify(root, leaf);
    }

    function isValidMessage(
        bytes32 messageHash,
        bytes32[] memory proof,
        bytes32 root
    ) public pure returns (bool) {
        return verifyMessage(proof, root, messageHash);
    }
}