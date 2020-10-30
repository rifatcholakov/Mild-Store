import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import ProductModal from './components/ProductModal';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="grid-container">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/admin" component={AdminPanel} />
                            <Route
                                path="/product/:id"
                                component={ProductModal}
                            />
                        </Switch>
                        <Footer />
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
