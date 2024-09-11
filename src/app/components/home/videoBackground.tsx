import { BsArrowDown } from 'react-icons/bs'
import styles from './videoBackground.module.css'
import BestSellers from './bestSellers'
import ButtonSlide from '../buttons/ButtonSlide'
import Link from 'next/link'
import { PiWatchThin } from 'react-icons/pi'

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
                <h3 className='text-3xl text-center mb-4'>Donde encontrarnos?</h3>
                <div className='mb-6 flex flex-col md:justify-evenly md:flex-row justify-center items-center gap-4'>
                    <div className='flex flex-col items-center gap-6 md:w-[40%]'>
                        <Link className='underline text-center md: text-2xl' target='blank' href={"https://www.google.com.ar/maps/place/Florer%C3%ADa+Morabito/@-34.6406452,-58.3793786,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb4c86bd0fbb:0xf708bf5454b23809!8m2!3d-34.6406497!4d-58.3745077!16s%2Fg%2F11gl0znfr7?hl=es&entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"}>
                            Av Montes de oca 1089 Barracas CABA</Link>
                        <div className='flex items-center'>
                            <PiWatchThin size={"2rem"} />
                            <p className='mx-2 text-center md:text-xl'>Lunes a Sábados de 10:30hs a 18hs</p>
                            <PiWatchThin size={"2rem"} />
                        </div>
                        <p className='mx-2 text-center md:text-xl font-bold'>Para condolencias estamos 24hs</p>
                        <div className='flex flex-col items-center md:text-xl gap-2'>
                            <h4 className='mx-2 text-center'>Nuestros teléfonos:</h4>
                            <p>43011744</p>
                            <p>1144702035</p>
                            <p>1169402036</p>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.556542407998!2d-58.37937861093566!3d-34.64064518966871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4c86bd0fbb%3A0xf708bf5454b23809!2sFlorer%C3%ADa%20Morabito!5e0!3m2!1ses!2sar!4v1726084061924!5m2!1ses!2sar" width="300" height="450" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

