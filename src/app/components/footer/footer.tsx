import { IoCallOutline, IoLogoInstagram } from "react-icons/io5"
import Instagram from "../svgs/instagram"
import { WhatsApp } from "../svgs/whatsApp"
import Link from "next/link"
import { SiGooglemaps } from "react-icons/si"
import { FaWhatsapp } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="bg-violet-200 rounded-t-2xl flex flex-col justify-between items-center p-4 mt-auto">
            <div className="flex flex-col justify-around h-[100%] sm:flex sm:flex-row sm:justify-between sm:w-[100%] mt-2">
                <div className="flex flex-col items-center sm:items-start">
                    <p className="font-medium underline mb-2">Contacto</p>
                    <div className="flex flex-col justify-around items-center sm:items-start w-40 gap-y-1">
                        <div>
                            <Link href={'https://wa.me/1169402036'} target="blank" className="flex items-center text-gray-600">
                                <FaWhatsapp size={'1.4em'} className="mr-2" />
                                11 6940-2036
                            </Link>
                        </div>
                        <div>
                            <Link href={'https://wa.me/1144702035'} target="blank" className="flex items-center text-gray-600">
                                <FaWhatsapp size={'1.4em'} className="mr-2" />
                                11 4470-2035
                            </Link>
                        </div>
                        <div>
                            <Link href={'https://www.instagram.com/floreriamorabito/'} target="blank" className="flex items-center text-gray-600">
                                <IoLogoInstagram size={'1.4em'} className="mr-2" />
                                @floreriamorabito
                            </Link>
                        </div>
                        <div className="flex justify-center w-[100%] sm:justify-normal items-center">
                            <Link href={''} className="text-gray-600 flex items-center">
                                <IoCallOutline size={'1.4em'} className="mr-2" />
                                4301-1744
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:items-end mt-6 sm:mt-0">
                    <p className="font-medium underline mb-2">Ubicación</p>
                    <div>
                        <Link href={'https://maps.app.goo.gl/Kn2b4TygxWSVxpf27'} target="blank" className="flex items-center text-gray-600">Av Montes de oca 1089 Barracas CABA
                            <SiGooglemaps size={'1.4em'} className="ml-2 text-red-600" />
                        </Link>
                    </div>
                </div>
            </div>

            <p className="mt-6 text-center text-gray-600">Floreria Morabito todos los derechos reservados 2024</p>
        </div>
    )
}

export default Footer

