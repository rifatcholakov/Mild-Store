import {
    CLEAR_CART,
    CLEAR_ORDER,
    CREATE_ORDER,
    DELETE_ORDER,
    FETCH_ORDERS
} from '../types';

export const createOrder = order => dispatch => {
    fetch('https://mild-store.herokuapp.com/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: CREATE_ORDER, payload: data });
            localStorage.clear('cartItems');
            dispatch({ type: CLEAR_CART });
        });
};

export const clearOrder = () => dispatch => {
    dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = () => async dispatch => {
    const res = await fetch('https://mild-store.herokuapp.com/api/orders');
    const data = await res.json();
    dispatch({
        type: FETCH_ORDERS,
        payload: data
    });
};

export const deleteOrder = order => async dispatch => {
    fetch(`https://mild-store.herokuapp.com/api/order/${order._id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: DELETE_ORDER,
                payload: data
            });
        });
};
