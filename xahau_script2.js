const xrpl = require("xrpl");
const client = new xrpl.Client("wss://xahau.network");

async function main() {
    await client.connect();
    const response = await client.request({ 
        command: "ledger_data", 
        type: "account", 
        ledger_index: 3,
        api_version: 1 
    });
    for (const data of response.result.state) {
        console.log(`Account: ${data.Account} Balance: ${xrpl.dropsToXrp(data.Balance)} XAH`);
    }
    await client.disconnect();
}

main();

