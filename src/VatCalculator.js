import React, { useState } from 'react';
import './VatCalculator.css';

function VatCalculator() {
    const [priceExclVat, setPriceExclVat] = useState('');
    const [vatRate, setVatRate] = useState(21); // Default VAT rate
    const [totalPrice, setTotalPrice] = useState('');
    const [vatAmount, setVatAmount] = useState('');

    const calculateVat = () => {
        const price = parseFloat(priceExclVat);
        const rate = vatRate / 100;
        const vat = price * rate;
        const total = price + vat;

        setVatAmount(vat.toFixed(2));
        setTotalPrice(total.toFixed(2));
    };

    return (
        <div className="component-container vat-calculator">
            <h3>Výpočet DPH</h3>
            <input
                type="number"
                value={priceExclVat}
                onChange={(e) => setPriceExclVat(e.target.value)}
                placeholder="Cena bez DPH"
            />
            <select value={vatRate} onChange={(e) => setVatRate(e.target.value)}>
                <option value="21">21%</option>
                <option value="15">15%</option>
                <option value="12">12%</option>
                <option value="10">10%</option>
            </select>
            <button onClick={calculateVat}>Spočítat</button>
            <p>Celková cena s DPH: {totalPrice} Kč</p>
            <p>Výše DPH: {vatAmount} Kč</p>
        </div>
    );
}

export default VatCalculator;
