const libp2p = require('libp2p');
const { createLibp2p } = require('libp2p');
const { TCP } = require('libp2p-tcp');
const { WebSockets } = require('libp2p-websockets');
const { PeerId } = require('libp2p-peer-id');
const { Multiaddr } = require('multiaddr');

async function createNode() {
    const peerId = await PeerId.create({ keyType: 'Ed25519' });
    const node = await createLibp2p({
        peerId,
        addresses: {
            listen: ['/ip4/0.0.0.0/tcp/0', '/ip6/::/tcp/0']
        },
        modules: {
            transport: [TCP, WebSockets],
        }
    });

    await node.start();
    console.log(`Node started with id ${node.peerId.toB58String()}`);
    
    node.connectionManager.on('peer:connect', (connection) => {
        console.log(`Connected to ${connection.remotePeer.toB58String()}`);
    });

    node.connectionManager.on('peer:disconnect', (connection) => {
        console.log(`Disconnected from ${connection.remotePeer.toB58String()}`);
    });

    return node;
}

createNode().catch(console.error);