import React from 'react';
import './BalanceDisplay.css';

function BalanceDisplay({ balance }) {
    return (
        <div className="balance-display">
            <h2>{balance.toFixed(2)} Kč</h2>
        </div>
    );
}

export default BalanceDisplay;
