import { createContext } from "react";
import { ProductProps } from "./DataProvider";


interface DataContextProps {
    products: ProductProps[];
    getData: (category: string) => void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);