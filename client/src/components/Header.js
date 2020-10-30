import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header>
                <Link
                    className="logo"
                    to="/"
                    onClick={e =>
                        /^\/product\/.+$/.test(props.history.location.pathname)
                            ? e.preventDefault()
                            : true
                    }
                >
                    MILD STORE
                </Link>
                <Link className="admin-link" to="/admin">
                    Admin Panel
                </Link>
            </header>
        </div>
    );
}

export default withRouter(Header);
