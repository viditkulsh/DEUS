const Queue = require('bull');

const messageQueue = new Queue('cross-chain-messages', {
  redis: {
    host: 'localhost',
    port: 6379,
  },
});

// Process messages from the queue
messageQueue.process(async (job) => {
  // Implement message processing logic here
  console.log(`Processing message: ${job.data.message}`);
});

// Function to add a message to the queue
const addMessageToQueue = async (message) => {
  await messageQueue.add({ message });
};

// Export the queue and addMessage function
module.exports = {
  messageQueue,
  addMessageToQueue,
};