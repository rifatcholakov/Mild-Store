import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <header>
                        <a href="/">Mild Store</a>
                    </header>
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
                    <footer>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </footer>
                </div>
            </Provider>
        );
    }
}

export default App;
