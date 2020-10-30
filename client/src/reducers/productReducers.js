import {
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    REMOVE_PRODUCT_FROM_MODAL
} from '../types';

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items
            };
        case FETCH_PRODUCTS:
            return { items: action.payload, filteredItems: action.payload };
        case FETCH_PRODUCT:
            return { ...state, modalProduct: action.payload };
        case REMOVE_PRODUCT_FROM_MODAL:
            return { ...state, modalProduct: action.payload };
        default:
            return state;
    }
};
