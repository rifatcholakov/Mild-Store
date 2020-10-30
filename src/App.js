import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import ProductModal from './components/ProductModal';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="grid-container">
                        <header>
                            <Link className="logo" to="/">
                                MILD STORE
                            </Link>
                            <Link className="admin-link" to="/admin">
                                Admin Panel
                            </Link>
                        </header>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/admin" component={AdminPanel} />
                            <Route
                                path="/product/:id"
                                component={ProductModal}
                            />
                        </Switch>
                        <footer>
                            &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </footer>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
