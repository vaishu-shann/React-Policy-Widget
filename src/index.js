import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import PolicyWidgetComponent from './PolicyWidgetComponent';

function Index() {
    const [addToCartResponse, setAddToCartResponse] = useState(null);

    function handleAddToCartResponse(response) {
        setAddToCartResponse(response);
    }

    return (
        <React.StrictMode>
            <PolicyWidgetComponent onAddToCart={handleAddToCartResponse} />
        </React.StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<Index />);
