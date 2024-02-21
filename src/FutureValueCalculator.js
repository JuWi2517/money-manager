// FutureValueCalculator.js
import React, { useState } from 'react';

function FutureValueCalculator() {
    const [initialAmount, setInitialAmount] = useState('');
    const [monthlyDeposit, setMonthlyDeposit] = useState('');
    const [annualInterest, setAnnualInterest] = useState('');
    const [years, setYears] = useState('');
    const [futureValue, setFutureValue] = useState('');

    const calculateFutureValue = () => {
        const P = parseFloat(initialAmount);
        const PMT = parseFloat(monthlyDeposit);
        const r = parseFloat(annualInterest) / 100 / 12; // Convert percentage to decimal and monthly rate
        const n = 12; // Monthly compounding
        const t = parseFloat(years);

        const FV = P * Math.pow(1 + r, n * t) + PMT * ((Math.pow(1 + r, n * t) - 1) / r);
        setFutureValue(FV.toFixed(2));
    };

    return (
        <div>
            <h2>Future Value Calculator</h2>
            <input type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} placeholder="Initial Amount" />
            <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} placeholder="Monthly Deposit" />
            <input type="number" value={annualInterest} onChange={(e) => setAnnualInterest(e.target.value)} placeholder="Annual Interest Rate (%)" />
            <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
            <button onClick={calculateFutureValue}>Calculate</button>
            {futureValue && <p>Estimated Future Value: {futureValue} CZK</p>}
        </div>
    );
}

export default FutureValueCalculator;
