import React, { useState } from 'react';
import styled from 'styled-components';
import BalanceDisplay from './BalanceDisplay';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import TransactionGraph from './TransactionGraph';
import CurrencyConverter from './CurrencyConverter';
import FutureValueCalculator from './FutureValueCalculator';
import VatCalculator from "./VatCalculator";
import SignInModal from "./SignInModal";

const OpenModalButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    
`;

function HomePage() {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const addTransaction = (transaction) => {
        const amount = transaction.type === 'Přicházející' ? transaction.amount : -transaction.amount;
        const newBalance = balance + amount;
        setBalance(newBalance);

        const newTransaction = {
            ...transaction,
            newBalance,
            timestamp: new Date().toISOString()
        };

        setTransactions([...transactions, newTransaction]);
    };
    const toggleModal = () => setIsSignInModalOpen(!isSignInModalOpen);

    return (
        <div>

            <BalanceDisplay balance={balance} />
            <OpenModalButton onClick={() => setIsModalOpen(true)}>Přidat transakci </OpenModalButton>
            {isModalOpen && <TransactionForm addTransaction={addTransaction} closeModal={() => setIsModalOpen(false)} />}
            <TransactionTable transactions={transactions} />
            <TransactionGraph transactions={transactions} />
            <CurrencyConverter apiKey="81dc48b24950dc54d035cc7a" />
            <FutureValueCalculator />
            <VatCalculator />
            <button onClick={toggleModal}>Příhlášení</button>
            {isSignInModalOpen && <SignInModal closeModal={toggleModal} />}
        </div>
    );
}

export default HomePage;
