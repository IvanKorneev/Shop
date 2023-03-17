import {combineReducers} from "redux";
import {productReducer} from "./products/reducer";
import {categoryReducer} from "./category/reducer";

export const rootReducer = combineReducers(
    {
        products: productReducer,
        category:categoryReducer
    }
);
export type RootState = ReturnType<typeof rootReducer>;