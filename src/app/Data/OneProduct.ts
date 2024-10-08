import { collection, getDocs, query, where } from "firebase/firestore";
import { ProductProps } from "../context/DataProvider";
import { db } from "../firebase/FireBase";

export const getProduct = async (title: string): Promise<ProductProps | null> => {
    const q = query(collection(db, "items"), where("titulo", "==", title))
    // const product: ProductProps[] = []
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
            description: doc.data().descripcion,
            image: doc.data().imagen,
            category: doc.data().tipo,
            title: doc.data().titulo,
            price: doc.data().precio,
        };
    }

    return null
}

// export const getProduct = async (title:string) => {
//     const q = query(collection(db, "items"), where("titulo", "==", title))
//     const product = await getDocs(q);
//     return product
// }

export const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))

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
    
    return products
}