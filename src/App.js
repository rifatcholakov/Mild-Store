// feature 1
import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: '',
            sort: ''
        };
    }

    sortProducts = event => {
        //todo
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState(state => ({
            sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === 'lowest'
                        ? a.price > b.price
                            ? 1
                            : -1
                        : sort === 'highest'
                        ? a.price < b.price
                            ? 1
                            : -1
                        : a._id < b._id
                        ? 1
                        : -1
                )
        }));
    };

    filterProducts = event => {
        console.log(event.target.value);
        if (event.target.value === '') {
            this.setState({ size: event.target.value, product: data.products });
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter(
                    product =>
                        product.availableSizes.indexOf(event.target.value) >= 0
                )
            });
        }
    };

    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">Mild Store</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Filter
                                count={this.state.products.length}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            />
                            <Products products={this.state.products} />
                        </div>
                        <div className="sidebar">Cart Items</div>
                    </div>
                </main>
                <footer>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </footer>
            </div>
        );
    }
}

export default App;
