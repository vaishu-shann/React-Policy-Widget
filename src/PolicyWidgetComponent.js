// PolicyWidgetComponent.js

import React, { useState } from 'react';

function PolicyWidgetComponent({ onAddToCart }) {
    const [selectedPolicy, setSelectedPolicy] = useState(null);


    function handleAddToCart(policy) {
        setSelectedPolicy(policy);
        onAddToCart(policy);
        mockAPICall()
            .then(response => {
                console.log('Item added to cart successfully:', policy);
                if (response === "Success") {
                    return policy;
                }
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
                onAddToCart(null);
                return;
            });
    }

    function mockAPICall() {
        return new Promise((resolve, reject) => {
            resolve('Success');
        });
    }

    return (
        <div className='w-sec'>
            <div className="widget">
                <div className="policy" >
                    <h2>2 Year Policy</h2>
                    <div className='desc'>This policy offers comprehensive coverage for home coverage, a deductible of $500 for each claim. </div>
                    <div className="price">Price: <span className="price-span">$100</span></div>
                    <button className="add-to-cart" onClick={() => handleAddToCart('2')}>Add to Cart</button>
                </div>
                <div className="policy" >
                    <h2>3 Year Policy</h2>
                    <div className='desc'>A three-year policy typically offers extended coverage for longer-term stability over the term.</div>
                    <div className="price">Price: <span className="price-span">$150</span></div>
                    <button className="add-to-cart" onClick={() => handleAddToCart('3')}>Add to Cart</button>
                </div>
                <div className="policy" >
                    <h2>4 Year Policy</h2>
                    <div className='desc'>Over the next four years, the government plans to implement healthcare reform aiming to reduce costs. </div>
                    <div className="price">Price: <span className="price-span">$300</span></div>
                    <button className="add-to-cart" onClick={() => handleAddToCart('4')}>Add to Cart</button>
                </div>
            </div>
            {selectedPolicy &&
                <div className="selected-policy">Selected Policy : You have selected<span className="selected-span"> {selectedPolicy} year</span> policy</div>}
        </div>
    );
}

export default PolicyWidgetComponent;
