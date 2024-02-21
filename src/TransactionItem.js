// TransactionItem.js
function TransactionItem({ transaction }) {
    return (
        <li>
            {transaction.type === 'Přicházející' ? '+' : '-'}{transaction.amount.toFixed(2)}{transaction.category}
        </li>
    );
}

export default TransactionItem;
