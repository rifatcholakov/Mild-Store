import React from 'react';
import Cart from './Cart';
import Filter from './Filter';
import Products from './Products';

export default function Home() {
    return (
        <main>
            <div className="content">
                <div className="main">
                    <Filter />
                    <Products />
                </div>
                <div className="sidebar">
                    <Cart />
                </div>
            </div>
        </main>
    );
}
