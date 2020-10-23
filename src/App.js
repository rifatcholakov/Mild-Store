import React from 'react';

function App() {
    return (
        <div className="grid-container">
            <header>
                <a hef="/">Mild Store</a>
            </header>
            <main>Product List</main>
            <footer>
                &copy; {new Date().getFullYear()} All rights reserved.
            </footer>
        </div>
    );
}

export default App;
