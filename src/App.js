// feature 1
import React from 'react';

function App() {
    return (
        <div className="grid-container">
            <header>
                <a href="/">Mild Store</a>
            </header>
            <main>Product List</main>
            <footer>
                &copy; {new Date().getFullYear()} All rights reserved.
            </footer>
        </div>
    );
}

export default App;
