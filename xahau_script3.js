const n=require("xrpl"),e=new n.Client("wss://xahau.network");!async function main(){await e.connect();const a=await e.request({command:"ledger_data",type:"account",ledger_index:3,api_version:1});for(const e of a.result.state)console.log(`Account: ${e.Account} Balance: ${n.dropsToXrp(e.Balance)} XAH`);await e.disconnect()}();
