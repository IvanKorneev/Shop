import {Product} from "../../types/product";

export interface ProductState {
    products: Product[]
    loading: boolean
    error: null | string
}

export enum GetProductsActionTypes {
    GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS = 'ET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'
}

interface GetProductsRequestAction {
    type: GetProductsActionTypes.GET_PRODUCTS_REQUEST
}

interface GetProductsSuccessAction {
    type: GetProductsActionTypes.GET_PRODUCTS_SUCCESS;
    payload: Product[]
}

interface GetProductErrorAction {
    type: GetProductsActionTypes.GET_PRODUCTS_ERROR
    payload: string
}

export type GetProductAction = GetProductsRequestAction | GetProductsSuccessAction | GetProductErrorAction;