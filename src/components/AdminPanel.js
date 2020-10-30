import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders, deleteOrder } from '../actions/orderActions';
import formatCurrency from '../util';
import Slide from 'react-reveal/Slide';

class AdminPanel extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return this.props.orders ? (
            <div>
                <div>
                    <h1 className="orders-title">Orders</h1>
                    <ul className="orders">
                        {this.props.orders.map(order => (
                            <Slide left>
                                <li key={order._id} className="order-group">
                                    <div>
                                        <strong>Order Number:</strong> #
                                        {order._id}
                                    </div>
                                    <div>
                                        <strong>Name: </strong>
                                        {order.name}
                                    </div>
                                    <div>
                                        <strong>Email: </strong>
                                        {order.email}
                                    </div>
                                    <div>
                                        <strong>Address: </strong>
                                        {order.address}
                                    </div>
                                    <div>
                                        <strong>Total: </strong>
                                        {formatCurrency(order.total)}
                                    </div>
                                    <div>
                                        <strong>Items: </strong>
                                        <ol>
                                            {order.cartItems.map(item => (
                                                <li key={item._id}>
                                                    {item.title}
                                                    {'  '}
                                                    {formatCurrency(item.price)}
                                                    x{item.count}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                    <button
                                        className="button danger"
                                        onClick={() =>
                                            this.props.deleteOrder(order)
                                        }
                                    >
                                        Delete Order
                                    </button>
                                </li>
                            </Slide>
                        ))}
                    </ul>
                </div>
            </div>
        ) : (
            <div>Loading...</div>
        );
    }
}

export default connect(
    state => ({
        orders: state.order.orders
    }),
    {
        fetchOrders,
        deleteOrder
    }
)(AdminPanel);
