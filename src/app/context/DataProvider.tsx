'use client'

import { ReactNode, useEffect, useReducer } from "react"
import { dataReducer } from "./DataReducer"
import { DataContext } from "./DataContext"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebase/FireBase"

const initialState: DbState = {
    products: []
}

export interface DbState {
    products: ProductProps[]
}

export interface ProductProps {
    description?: string;
    image: string;
    category?: string;
    title: string;
    price: number;
}

interface DataProviderProps {
    children: ReactNode
}


export const DataProvider = ({ children }: DataProviderProps) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    const getData = async (category:string) => {
        const q = query(collection(db, "items"), where("tipo", "==", category), orderBy("precio", "desc"));
        
        const products: ProductProps[] = [];
        const querySnapshot = await getDocs(q);
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

    const getProduct = async (title:string) => {
        const q = query(collection(db, "items"), where("titulo", "==", title))
        const product: ProductProps[] = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            product.push({
                description: doc.data().descripcion,
                image: doc.data().imagen,
                category: doc.data().tipo,
                title: doc.data().titulo,
                price: doc.data().precio,
            });
        });
        return product
        
    }

    
    return (
        <DataContext.Provider value={{
            ...state,
            getData,
            getProduct
        }}>
            {children}
        </DataContext.Provider>
    )
}

