import {CategoryState, GetCategoryAction, GetCategoryActionTypes} from "./typs";


const initialState: CategoryState = {
    category: [],
    loading: false,
    error: null
}
export const categoryReducer = (state = initialState, action: GetCategoryAction): CategoryState => {
    switch (action.type) {
        case GetCategoryActionTypes.GET_CATEGORY_REQUEST:
            return {...state, loading: true, error: null, category: []}
        case GetCategoryActionTypes.GET_CATEGORY_SUCCESS:
            return {...state, loading: false, error: null, category: action.payload}
        case GetCategoryActionTypes.GET_CATEGORY_ERROR:
            return {...state, loading: false, error: action.payload, category: []}
        default:
            return state
    }
}