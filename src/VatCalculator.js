// VatCalculator.js
import React, { useState } from 'react';

function VatCalculator() {
    const [priceExclVat, setPriceExclVat] = useState('');
    const [vatRate, setVatRate] = useState(21); // Default VAT rate, can be adjusted
    const [totalPrice, setTotalPrice] = useState('');
    const [vatAmount, setVatAmount] = useState('');

    const calculateVat = () => {
        const vatDecimal = vatRate / 100;
        const calculatedVatAmount = priceExclVat * vatDecimal;
        const calculatedTotalPrice = parseFloat(priceExclVat) + calculatedVatAmount;

        setVatAmount(calculatedVatAmount.toFixed(2));
        setTotalPrice(calculatedTotalPrice.toFixed(2));
    };

    return (
        <div>
            <h3>Výpočet DPH</h3>
            <label>Cena bez DPH:</label>
            <input
                type="number"
                value={priceExclVat}
                onChange={(e) => setPriceExclVat(e.target.value)}
                placeholder="Zadejte cenu bez DPH"
            />
            <label>Sazba DPH:</label>
            <select value={vatRate} onChange={(e) => setVatRate(e.target.value)}>
                <option value="21">21%</option>
                <option value="15">15%</option>
                <option value="10">10%</option>
                {/* Add more VAT rates as needed */}
            </select>
            <button onClick={calculateVat}>Spočítat</button>
            <p>Celková cena s DPH: {totalPrice} Kč</p>
            <p>Výše DPH: {vatAmount} Kč</p>
        </div>
    );
}

export default VatCalculator;
