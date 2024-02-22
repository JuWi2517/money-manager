import React, { useState, useEffect } from 'react';
import './TransactionForm.css';

function TransactionForm({ addTransaction, closeModal }) {
    const categories = ['Plat', 'Nákupy', 'Potřeby', 'Zábava', 'Ostatní'];
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Přicházející');
    const [category, setCategory] = useState(categories[0]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) return;
        addTransaction({
            id: Date.now(),
            amount: parseFloat(amount),
            type,
            category,
        });
        setAmount('');
        setCategory(categories[0]);
        closeModal();
    };

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>&times;</button>
                <form onSubmit={handleSubmit} className="transaction-form">
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" autoFocus required />
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Přicházející">Přicházející</option>
                        <option value="Odcházející">Odcházející</option>
                    </select>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <button type="submit">Add Transaction</button>
                </form>
            </div>
        </div>
    );
}

export default TransactionForm;
