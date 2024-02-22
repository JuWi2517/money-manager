import React, { useState } from 'react';
import './TransactionTable.css';

const categories = ['Plat', 'Nákupy', 'Potřeby', 'Zábava', 'Ostatní'];

function TransactionTable({ transactions }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');

    const filteredTransactions = transactions.filter(transaction => {
        const categoryMatch = selectedCategory === 'All' || transaction.category === selectedCategory;
        const typeMatch = selectedType === 'All' || transaction.type === selectedType;
        return categoryMatch && typeMatch;
    });

    return (
        <div className="component-container transaction-table">
            <div className="filter-section">
                <label className="label" htmlFor="category-filter">Filtruj podle kategorie:</label>
                <select className="filter-select" id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">Všechny kategorie</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                <label className="label" htmlFor="type-filter">Filtruj podle typu:</label>
                <select className="filter-select" id="type-filter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="All">Všechy typy</option>
                    <option value="Přicházející">Přicházející</option>
                    <option value="Odcházející">Odcházející</option>
                </select>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Typ</th>
                    <th>Počet</th>
                    <th>Kategorie</th>
                </tr>
                </thead>
                <tbody>
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount} Kč</td>
                            <td>{transaction.category}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Nebyly nalezeny žádné transakce.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionTable;
