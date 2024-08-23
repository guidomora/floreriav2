import { DbState, ProductProps } from "./DataProvider";

type ActionReducer = | { type: 'getData', payload: ProductProps[] }

export const dataReducer = (state: DbState, action: ActionReducer) => {
    switch (action.type) {
        case 'getData':
            return {
                ...state,
                products: action.payload
            }

        default:
            return state
    }
}   