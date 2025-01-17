const { exec } = require('child_process');

async function runTests() {
    try {
        console.log('Running tests for the DEUS development environment...');
        await exec('npm test', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing tests: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Test stderr: ${stderr}`);
                return;
            }
            console.log(`Test output: ${stdout}`);
        });
    } catch (error) {
        console.error(`Failed to run tests: ${error.message}`);
    }
}

runTests();