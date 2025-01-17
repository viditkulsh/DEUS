const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RelayContract", function () {
    let RelayContract;
    let relayContract;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        RelayContract = await ethers.getContractFactory("RelayContract");
        [owner, addr1, addr2] = await ethers.getSigners();
        relayContract = await RelayContract.deploy();
        await relayContract.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await relayContract.owner()).to.equal(owner.address);
        });
    });

    describe("Cross-chain message passing", function () {
        it("Should emit a message event on sendMessage", async function () {
            await expect(relayContract.sendMessage(addr1.address, "Hello, World!"))
                .to.emit(relayContract, "MessageSent")
                .withArgs(owner.address, addr1.address, "Hello, World!");
        });
    });

    describe("Asset transfers", function () {
        it("Should allow asset locking and unlocking", async function () {
            await relayContract.lockAsset(addr1.address, 100);
            expect(await relayContract.isAssetLocked(addr1.address)).to.be.true;

            await relayContract.unlockAsset(addr1.address);
            expect(await relayContract.isAssetLocked(addr1.address)).to.be.false;
        });
    });

    describe("Security", function () {
        it("Should revert if non-owner tries to lock asset", async function () {
            await expect(relayContract.connect(addr1).lockAsset(addr2.address, 100)).to.be.revertedWith("Ownable: caller is not the owner");
        });
    });
});