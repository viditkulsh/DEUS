const Moralis = require('moralis').default;

const serverUrl = "https://your-server-url";
const appId = "your-app-id";

Moralis.start({ serverUrl, appId });

async function getUserNFTs(userAddress) {
    const options = {
        chain: "eth",
        address: userAddress,
    };
    const nfts = await Moralis.Web3API.account.getNFTs(options);
    return nfts;
}

async function transferNFT(nftAddress, tokenId, toAddress) {
    const options = {
        type: "erc721",
        receiver: toAddress,
        contractAddress: nftAddress,
        tokenId: tokenId,
    };
    const transaction = await Moralis.Web3API.token.transfer(options);
    return transaction;
}

module.exports = {
    getUserNFTs,
    transferNFT,
};