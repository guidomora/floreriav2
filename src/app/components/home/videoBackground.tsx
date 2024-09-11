import { BsArrowDown } from 'react-icons/bs'
import styles from './videoBackground.module.css'
import BestSellers from './bestSellers'
import ButtonSlide from '../buttons/ButtonSlide'

export const VideoBackground = () => {




    return (
        <>
            <div className="w-[100%] h-[100vh] overflow-hidden">
                <div className="absolute top-[30vh] flex justify-center items-center w-[100%] z-10">
                    <h1 className={`border-4 border-violet-400 p-12 font-bold sm:font-thin font-goodSans 
                text-2xl text-black  md:text-6xl xl:text-9xl text-shadow-outline`}>Florería Morabito</h1>
                </div>
                <div className="absolute top-[70vh] flex justify-center items-center w-[100%] z-10">
                    <ButtonSlide />
                </div>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    src={'/recorte.mp4'} autoPlay muted loop playsInline disablePictureInPicture
                    />
            </div>
            <div>
                <BestSellers />
            </div>
        </>
    )
}

