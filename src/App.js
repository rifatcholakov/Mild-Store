import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="grid-container">
                        <header>
                            <a href="/">Mild Store</a>
                        </header>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/admin" component={AdminPanel} />
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
