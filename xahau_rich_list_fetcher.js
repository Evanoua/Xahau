const xrpl = require("xrpl"), client = new xrpl.Client("wss://xahau.network");

async function main() {
    await client.connect();
    const { result: { state } } = await client.request({ command: "ledger_data", ledger_index: 3, api_version: 1 });

    // Categorize accounts by balance ranges
    const ranges = [
        { range: "0 - 10", min: 0, max: 10, count: 0, sum: 0 },
        { range: "10 - 100", min: 10, max: 100, count: 0, sum: 0 },
        { range: "100 - 1000", min: 100, max: 1000, count: 0, sum: 0 },
        { range: "1000+", min: 1000, max: Infinity, count: 0, sum: 0 }
    ];

    // Process account data
    state.forEach(e => {
        if (e.Balance) {
            const balance = parseFloat(xrpl.dropsToXrp(e.Balance));
            ranges.forEach(r => {
                if (balance >= r.min && balance < r.max) {
                    r.count++;
                    r.sum += balance;
                }
            });
        }
    });

    // Print results in a table
    console.log("Number of Accounts | Balance Range      | Total Balance");
    console.log("----------------------------------------------------");
    ranges.forEach(r => {
        console.log(`${r.count.toString().padEnd(18)} | ${r.range.padEnd(16)} | ${r.sum.toFixed(2)} XAH`);
    });

    await client.disconnect();
}

main();
