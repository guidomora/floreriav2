import { BsArrowDown } from 'react-icons/bs'
import styles from './videoBackground.module.css'
import BestSellers from './bestSellers'

export const VideoBackground = () => {
    return (
        <>
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <div className="absolute top-[30vh] flex justify-center items-center w-[100%] z-10">
                <h1 className={`border-4 border-violet-400 p-12 font-thin font-goodSans text-9xl text-shadow-outline ${styles['texto-borde']}`}>Florería Morabito</h1>
            </div>
            <div className="absolute top-[70vh] flex justify-center items-center w-[100%] z-10">
                <button className="flex items-center font-thin font-goodSans bg-violet-400 text-2xl border-2 border-violet-400 p-4
                 transition hover:shadow-violet-900/90 hover:shadow-xl">
                    Productos más vendidos <BsArrowDown className='ml-3'/></button>
            </div>
            <video src={require('../../../../public/recorte.mp4')} autoPlay muted loop />
        </div>
        <div>
            <BestSellers />
        </div>
        </>
    )
}

