import React, { useState } from 'react';
import './CurrencyConverter.css';

function CurrencyConverter({ apiKey }) {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [currency, setCurrency] = useState('');
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
                setConvertedAmount(`${result} `);
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            console.error("Error fetching currency data:", error);
            setConvertedAmount("Chyba při konverzi");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="component-container currency-converter">
            <h2>Převodník měny</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Částka v CZK"
            />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option>Vyberte měnu</option>
                <option value="USD">USD - Americký dolar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - Britská libra</option>
                <option value="JPY">JPY - Japonský jen</option>
                <option value="CAD">CAD - Kanadský dolar</option>
                <option value="AUD">AUD - Australský dolar</option>
                <option value="CHF">CHF - Švýcarský frank</option>
                <option value="CNY">CNY - Čínský jüan</option>
                <option value="SEK">SEK - Švédská koruna</option>
                <option value="NZD">NZD - Novozélandský dolar</option>
            </select>
            <button onClick={handleConvert} disabled={isLoading || !amount}>
                Převést
            </button>
            <p>{isLoading ? "Načítání..." : `${convertedAmount} ${currency}`}</p>
        </div>
    );
}

export default CurrencyConverter;
