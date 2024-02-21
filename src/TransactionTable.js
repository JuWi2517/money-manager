// TransactionTable.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FilterSection = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  line-height: 36px;
`;

const FilterSelect = styled.select`
  margin-right: 20px;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #3498db;
    color: white;
  }
`;

// Assuming these are your predefined categories
const categories = ['Plat', 'Nákupy', 'Potřeby', 'Zábava', 'Ostatní'];

function TransactionTable({ transactions }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');

    // Filter transactions based on selected category and type
    const filteredTransactions = transactions.filter(transaction => {
        const categoryMatch = selectedCategory === 'All' || transaction.category === selectedCategory;
        const typeMatch = selectedType === 'All' || transaction.type === selectedType;
        return categoryMatch && typeMatch;
    });

    return (
        <div>
            <FilterSection>
                <FilterLabel htmlFor="category-filter">Filtruj podle kategorie:</FilterLabel>
                <FilterSelect id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">Všechny kategorie</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </FilterSelect>

                <FilterLabel htmlFor="type-filter">Filtruj podle typu:</FilterLabel>
                <FilterSelect id="type-filter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="All">Všechy typy</option>
                    <option value="Přicházející">Přicházející</option>
                    <option value="Odcházející">Odcházející</option>
                </FilterSelect>
            </FilterSection>

            <StyledTable>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Category</th>
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
                        <td colSpan="3">No transactions found.</td>
                    </tr>
                )}
                </tbody>
            </StyledTable>
        </div>
    );
}

export default TransactionTable;
