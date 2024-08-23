'use client'

import { ReactNode, useEffect, useReducer } from "react"
import { dataReducer } from "./DataReducer"
import { DataContext } from "./DataContext"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/FireBase"

const initialState: DbState = {
    products: []
}

export interface DbState {
    products: ProductProps[]
}

export interface ProductProps {
    description: string;
    image: string;
    category: string;
    title: string;
    price: string;
}

interface DataProviderProps {
    children: ReactNode
}


export const DataProvider = ({ children }: DataProviderProps) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "items"));
        const products: ProductProps[] = [];
        querySnapshot.forEach((doc) => {
            products.push({
                description: doc.data().descripcion,
                image: doc.data().imagen,
                category: doc.data().tipo,
                title: doc.data().titulo,
                price: doc.data().precio,
            });
        });
        dispatch({ type: "getData", payload: products });
    }

    return (
        <DataContext.Provider value={{
            ...state,
            getData
        }}>
            {children}
        </DataContext.Provider>
    )
}

