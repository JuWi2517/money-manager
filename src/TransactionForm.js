// TransactionForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    z-index: 1001;
`;

const CloseButton = styled.button`
    float: right;
    font-size: 20px;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
`;

// Predefined categories
const categories = ['Plat', 'Nákupy', 'Potřeby', 'Zábava', 'Ostatní'];

function TransactionForm({ addTransaction, closeModal }) {
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

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
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
        <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <form onSubmit={handleSubmit}>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Počet" autoFocus required />
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Přicházející">Přicházející</option>
                        <option value="Odcházející">Odcházející</option>
                    </select>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <button type="submit">Přidat transakci</button>
                </form>
            </ModalContent>
        </ModalBackdrop>
    );
}

export default TransactionForm;
