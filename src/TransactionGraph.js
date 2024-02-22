import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './TransactionGraph.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function TransactionGraph({ transactions }) {
    const data = {
        labels: transactions.map(t => new Date(t.timestamp).toLocaleDateString()),
        datasets: [
            {
                label: 'Tvé finance',
                data: transactions.map(t => t.newBalance),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,


            }
        ]
    };

    return (
        <div className="component-container transaction-graph">
            <Line data={data} />
        </div>
    );
}

export default TransactionGraph;
