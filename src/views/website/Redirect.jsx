import React, { useState } from 'react';
import axios from 'axios';
import JazzCashForm from './JazzCashForm';

const Redirect = () => {
    const [formData, setFormData] = useState(null);
    const [amount, setAmount] = useState('');

    const handlePayNow = async () => {
        try {
            const res = await axios.post('https://xlxz1s7k-5000.inc1.devtunnels.ms/api/payment/initiate', {
                amount
            });
            setFormData(res.data.data); // only send data fields to form
        } catch (error) {
            console.error('Payment initiation failed:', error);
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h1>JazzCash Payment</h1>

            {!formData ? (
                <div>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button onClick={handlePayNow} style={{ marginLeft: '10px' }}>
                        Pay Now
                    </button>
                </div>
            ) : (
                <JazzCashForm formData={formData} />
            )}
        </div>
    );
};

export default Redirect;
