import React, { useEffect } from 'react';

const JazzCashForm = ({ formData }) => {
    useEffect(() => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/';

        Object.entries(formData).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    }, [formData]);

    return (
        <div>
            <h2>Redirecting to JazzCash...</h2>
        </div>
    );
};

export default JazzCashForm;
