    import React, { useState } from 'react';
    import './FutureValueCalculator.css';

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
            <div className="component-container">
                <h2>Kalkulačka budoucí hodnoty</h2>
                <input type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} placeholder="Počáteční částka" />
                <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} placeholder="Měsíční vklad" />
                <input type="number" value={annualInterest} onChange={(e) => setAnnualInterest(e.target.value)} placeholder="Roční úroková sazba (%)" />
                <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Kolik let budete inestovat" />
                <button onClick={calculateFutureValue}>Vypočítat</button>
                {futureValue && <p>Odhadovaná budoucí hodnota: {futureValue} Kč</p>}
            </div>
        );
    }

    export default FutureValueCalculator;
