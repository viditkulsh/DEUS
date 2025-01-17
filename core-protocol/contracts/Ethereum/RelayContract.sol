// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract RelayContract {
    using MerkleProof for bytes32[];

    event MessageRelayed(address indexed sender, bytes message);
    event AssetTransferred(address indexed from, address indexed to, uint256 amount);

    struct Message {
        address sender;
        bytes data;
        uint256 timestamp;
    }

    mapping(bytes32 => bool) public processedMessages;

    function relayMessage(bytes calldata _data) external {
        bytes32 messageHash = keccak256(abi.encodePacked(msg.sender, _data, block.timestamp));
        require(!processedMessages[messageHash], "Message already processed");

        processedMessages[messageHash] = true;
        emit MessageRelayed(msg.sender, _data);
    }

    function transferAsset(address _to, uint256 _amount) external {
        // Implement asset transfer logic here
        emit AssetTransferred(msg.sender, _to, _amount);
    }

    function verifyMerkleProof(bytes32[] calldata proof, bytes32 root, bytes32 leaf) external pure returns (bool) {
        return MerkleProof.verify(proof, root, leaf);
    }
}