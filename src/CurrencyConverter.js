// CurrencyConverter.js
import React, { useState } from 'react';

function CurrencyConverter({ apiKey }) {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [isLoading, setIsLoading] = useState(false);

    const handleConvert = async () => {
        setIsLoading(true);
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/CZK`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.result === 'success') {
                const rate = data.conversion_rates[currency];
                const result = (amount * rate).toFixed(2);
                setConvertedAmount(`${result} ${currency}`);
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            console.error("Error fetching currency data:", error);
            setConvertedAmount("Conversion Error");
        }

        setIsLoading(false);
    };

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in CZK"
            />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>

                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="SEK">SEK - Swedish Krona</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
            </select>
            <button onClick={handleConvert} disabled={isLoading || !amount}>
                Convert
            </button>
            <p>{isLoading ? "Loading..." : convertedAmount}</p>
        </div>
    );
}

export default CurrencyConverter;
