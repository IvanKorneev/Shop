export interface CategoryState {
    category: string[]
    loading: boolean
    error: null | string
}

export enum GetCategoryActionTypes {
    GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST',
    GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS',
    GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR'
}

interface GetCategoryRequestAction {
    type: GetCategoryActionTypes.GET_CATEGORY_REQUEST
}

interface GetCategorySuccessAction {
    type: GetCategoryActionTypes.GET_CATEGORY_SUCCESS
    payload: string[]
}

interface GetCategoryError {
    type: GetCategoryActionTypes.GET_CATEGORY_ERROR
    payload: string
}