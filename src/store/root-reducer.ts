import {combineReducers} from "redux";
import {productReducer} from "./products/reducer";

export const rootReducer = combineReducers(
    {
        products: productReducer
    }
);
export type RootState = ReturnType<typeof rootReducer>;