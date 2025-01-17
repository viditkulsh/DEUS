const { exec } = require('child_process');

async function setupDevelopmentEnvironment() {
    try {
        console.log('Setting up development environment...');

        // Install dependencies
        await executeCommand('npm install');

        // Build Docker containers
        await executeCommand('docker-compose up -d');

        console.log('Development environment setup complete.');
    } catch (error) {
        console.error('Error setting up development environment:', error);
    }
}

function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

setupDevelopmentEnvironment();