import {
    FETCH_PRODUCTS,
    ORDER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_SIZE,
    FETCH_PRODUCT,
    REMOVE_PRODUCT_FROM_MODAL
} from '../types';

export const fetchProducts = () => async dispatch => {
    const res = await fetch('/api/products');
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
};

export const fetchProduct = productId => async dispatch => {
    const res = await fetch('/api/product/' + productId);
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCT,
        payload: data
    });
};

export const removeProductFromModal = () => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT_FROM_MODAL,
        payload: null
    });
};

export const filterProducts = (products, size) => dispatch => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size,
            items:
                size === ''
                    ? products
                    : products.filter(x => x.availableSizes.indexOf(size) >= 0)
        }
    });
};

export const sortProducts = (filteredProducts, sort) => dispatch => {
    const sortedProducts = filteredProducts.slice();

    if (sort === 'latest') {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === 'lowest'
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                ? -1
                : 1
        );
    }

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort,
            items: sortedProducts
        }
    });
};
