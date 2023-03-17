import {Dispatch} from "redux";
import {GetCategoryAction, GetCategoryActionTypes} from "./typs";
import axios from "axios";
import {BASE_URL} from "../../const/base-url";


export const getCategory = () => {
    return async (dispatch: Dispatch<GetCategoryAction>) => {
        try {
            dispatch({type: GetCategoryActionTypes.GET_CATEGORY_REQUEST});
            const response = await axios.get(`${BASE_URL}/products/categories`)
            dispatch({type: GetCategoryActionTypes.GET_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GetCategoryActionTypes.GET_CATEGORY_ERROR, payload: 'Error Loading'})
        }
    }
}