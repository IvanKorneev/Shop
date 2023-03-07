import {Dispatch} from "redux";
import {GetProductAction, GetProductsActionTypes} from "./types";
import {BASE_URL} from "../../const/base-url";
import axios from "axios";

export const getProduct = () => {
    return async (dispatch: Dispatch<GetProductAction>) => {
        try {
            dispatch({type: GetProductsActionTypes.GET_PRODUCTS_REQUEST});
            const response = await axios.get(`${BASE_URL}/products`)
            dispatch({type: GetProductsActionTypes.GET_PRODUCTS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch(({type: GetProductsActionTypes.GET_USER_ERROR, payload: 'Error Loading'}))
        }
    }

}