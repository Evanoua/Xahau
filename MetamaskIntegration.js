let provider, signer;

async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask n'est pas installé !");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();

    const address = await signer.getAddress();
    document.getElementById("wallet").innerText = "Connecté : " + address;
}

document.getElementById("connect").addEventListener("click", connectWallet);

//mettre dans script.js dossier projet
