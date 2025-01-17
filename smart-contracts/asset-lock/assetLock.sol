// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetLock {
    mapping(address => uint256) public lockedAssets;
    mapping(address => bool) public isLocked;

    event AssetsLocked(address indexed user, uint256 amount);
    event AssetsUnlocked(address indexed user, uint256 amount);

    function lockAssets(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(!isLocked[msg.sender], "Assets already locked");

        lockedAssets[msg.sender] = amount;
        isLocked[msg.sender] = true;

        emit AssetsLocked(msg.sender, amount);
    }

    function unlockAssets() external {
        require(isLocked[msg.sender], "No assets locked");

        uint256 amount = lockedAssets[msg.sender];
        lockedAssets[msg.sender] = 0;
        isLocked[msg.sender] = false;

        emit AssetsUnlocked(msg.sender, amount);
    }

    function getLockedAssets(address user) external view returns (uint256) {
        return lockedAssets[user];
    }
}