import ProductBest from "../products/ProductsBest/productBest"

const bestSellers = [
    {
        title: 'Ramo de flores variadas',
        price: '80.000',
        img: 'https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/ramo24.jpeg?alt=media&token=e9aff44d-779e-4943-bec6-bb7cd567346d',
        productPath: 'qqqqqqqqqq',
        categoryPath: 'wwwwwwww'
    },
    {
        title: 'Ramo de flores variadas',
        price: '80.000',
        img: 'https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/ramo24.jpeg?alt=media&token=e9aff44d-779e-4943-bec6-bb7cd567346d',
        productPath: 'qqqqqqqqqq',
        categoryPath: 'wwwwwwww'
    },
    {
        title: 'Ramo de flores variadas',
        price: '80.000',
        img: 'https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/ramo24.jpeg?alt=media&token=e9aff44d-779e-4943-bec6-bb7cd567346d',
        productPath: 'qqqqqqqqqq',
        categoryPath: 'wwwwwwww'
    }
]

const BestSellers = () => {
    return (
        <div className="my-12 flex flex-col items-center justify-center">
            <h2 className="text-center text-4xl font-thin" id="best">Preferidos por nuestros clientes</h2>
            <div className="flex flex-col gap-16 lg:gap-0 md:flex-row items-center lg:justify-evenly justify-center  w-[100%] p-4 mt-10 flex-wrap">
                {bestSellers.map((bestSeller) =>
                    <ProductBest key={bestSeller.title} title={bestSeller.title} price={bestSeller.price
                    } img={bestSeller.img} productPath={bestSeller.productPath} categoryPath={bestSeller.categoryPath} />
                )}
            </div>
        </div>
    )
}

export default BestSellers