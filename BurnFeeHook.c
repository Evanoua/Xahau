#include "hookapi.h"

int64_t hook(uint32_t reserved) {
    trace(SBUF("Hook triggered: Checking for token payment"));

    // Get transaction type
    uint8_t txn_type[32];
    otxn_field(SBUF(txn_type), sfTransactionType);

    if (*((uint16_t*)txn_type) != ttPAYMENT) {
        trace(SBUF("Not a Payment transaction"));
        return 0;  // Ignore non-payment transactions
    }

    // Get the currency of the transaction
    uint8_t currency[32];
    otxn_field(SBUF(currency), sfAmount);

    // Check if the transaction is using our token (MYTOKEN in hex)
    uint8_t my_token[20] = { 'M', 'Y', 'T', 'O', 'K', 'E', 'N' };
    if (BUFFER_EQUAL_20(currency, my_token) != 1) {
        trace(SBUF("Not MYTOKEN, ignoring transaction"));
        return 0;  // Ignore non-MYTOKEN transactions
    }

    // Get the transaction amount
    int64_t amount;
    otxn_field(&amount, sizeof(amount), sfAmount);

    // Calculate burn fee (1% of the amount)
    int64_t burn_amount = amount / 100;

    // Define blackhole address (a non-recoverable account)
    uint8_t blackhole[20] = {0};  // 0000000000000000000000000000000000000000

    // Burn the tokens (send to blackhole)
    int64_t result = emit(
        SBUF(blackhole),
        0, burn_amount,  // No sender fee, burn amount
        0, 0, 0, 0
    );

    trace(SBUF("Burn transaction executed"));

    return result;
}
