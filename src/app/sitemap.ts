import { getData } from "./Data/OneProduct"
import { categories } from "./helpers/helpers"


export default async function sitemap() {

    const baseUrl = 'https://floreriamorabito.com.ar'
    const response = await getData()
    const products = response.map(product => {
        return {
            url: `${baseUrl}/producto/${product.title.replace(/ /g, "_")}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        }
    })


    const category = categories.map(category => {
        return {
            url: `${baseUrl}/categoria/${category}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    })

    return [
        {
            url: `https://floreriamorabito.com.ar/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },        
        ...category,
        ...products
    ]
}