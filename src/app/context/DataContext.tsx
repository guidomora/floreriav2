import { createContext } from "react";
import { ProductProps } from "./DataProvider";


interface DataContextProps {
    products: ProductProps[];
    getData: (category: string) => void
    getProduct: (title: string) => void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);