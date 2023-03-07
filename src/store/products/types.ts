import {Product} from "../../types/product";

export interface ProductState {
    products: Product[]
    loading: boolean
    error: null | string
}

export enum GetProductsActionTypes {
    GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS = 'ET_PRODUCTS_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR'
}

interface GetProductsAction {
    type: GetProductsActionTypes.GET_PRODUCTS_REQUEST
}

interface GetProductsSuccessAction {
    type: GetProductsActionTypes.GET_PRODUCTS_SUCCESS;
    payload: Product[]
}

interface GetProductErrorAction {
    type: GetProductsActionTypes.GET_USER_ERROR
    payload: string
}

export type GetProductAction = GetProductsAction | GetProductsSuccessAction | GetProductErrorAction;