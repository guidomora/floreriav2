import { ProductProps } from "@/app/context/DataProvider"
import Image from "next/image"


const ProductPageDetail = ({ title, image, description, price }: ProductProps) => {

    console.log( title, image, description, price);
    

    return (
        <div>
            <div>
                <Image className="" width={500} height={500} src={image} alt={'title'}  />
            </div>
            <div>
                <h1 className="">{title}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductPageDetail