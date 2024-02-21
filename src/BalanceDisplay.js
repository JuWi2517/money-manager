// BalanceDisplay.js
function BalanceDisplay({ balance }) {
    return <h2> {balance.toFixed(2)}Kč</h2>;
}

export default BalanceDisplay;
