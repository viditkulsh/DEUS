// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library StandardizedMessage {
    struct Message {
        address sender;
        address receiver;
        uint256 nonce;
        bytes data;
        uint256 timestamp;
    }

    function createMessage(
        address _sender,
        address _receiver,
        uint256 _nonce,
        bytes memory _data
    ) internal view returns (Message memory) {
        return Message({
            sender: _sender,
            receiver: _receiver,
            nonce: _nonce,
            data: _data,
            timestamp: block.timestamp
        });
    }

    function validateMessage(Message memory _message) internal view returns (bool) {
        // Implement validation logic (e.g., nonce checks, sender verification)
        return _message.timestamp <= block.timestamp;
    }
}