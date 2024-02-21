// TransactionGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  max-width: 600px;
`;

function TransactionGraph({ transactions }) {
    const data = {
        labels: transactions.map(t => new Date(t.timestamp).toLocaleDateString("en-US")),
        datasets: [
            {
                label: 'Tvé finance ',
                data: transactions.map(t => t.newBalance),
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    };

    return (
        <GraphContainer>
            <Line data={data} options={options} />
        </GraphContainer>
    );
}

export default TransactionGraph;
