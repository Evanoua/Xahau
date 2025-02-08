from xrpl.clients import JsonRpcClient
from xrpl.wallet import Wallet
from xrpl.transaction import safe_sign_and_submit_transaction
from xrpl.models.transactions import Payment
from xrpl.models.requests import AccountInfo
from xrpl.utils import xrp_to_drops

# Connect to XRPL Testnet
client = JsonRpcClient("https://s.altnet.rippletest.net:51234/")

# Create issuer wallet
issuer_wallet = Wallet.create()

# Check issuer account info
account_info = AccountInfo(account=issuer_wallet.classic_address, ledger_index="validated")
response = client.request(account_info)
print("Issuer Account Info:", response.result)

# Define token details
TOKEN_NAME = "MYTOKEN"
TOKEN_AMOUNT = "1000000"  # 1 million tokens

# Send tokens to another account
destination_address = "r..."  # Replace with recipient's XRPL address
payment_txn = Payment(
    account=issuer_wallet.classic_address,
    destination=destination_address,
    amount=TOKEN_AMOUNT,  # Token amount (not XRP)
    currency=TOKEN_NAME,
    issuer=issuer_wallet.classic_address,
)

# Sign and submit
signed_tx = safe_sign_and_submit_transaction(payment_txn, issuer_wallet, client)
print("Transaction Result:", signed_tx.result)
