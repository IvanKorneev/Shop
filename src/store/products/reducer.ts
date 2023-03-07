import {GetProductAction, GetProductsActionTypes, ProductState} from "./types";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}
export const productReducer = (state = initialState, action: GetProductAction): ProductState => {
    switch (action.type) {
        case GetProductsActionTypes.GET_PRODUCTS_REQUEST:
            return {...state, loading: true, error: null, products: []}
        case GetProductsActionTypes.GET_PRODUCTS_SUCCESS:
            return {...state, loading: false, error: null, products: action.payload}
        case GetProductsActionTypes.GET_USER_ERROR:
            return {...state, loading: false, error: action.payload, products: []}
        default:
            return state
    }
}