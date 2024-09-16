import Link from 'next/link'
import { MdErrorOutline } from 'react-icons/md'

export default function NotFound() {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center w-full h-[70vh]'>
                <h1 className='text-4xl'>Página no encontrada</h1>
                <MdErrorOutline className='mt-10' size={"5rem"} />
                <Link className='bg-violet-300 text-black p-2 rounded-xl h-10 flex items-center mt-10' href="/">Volver al inicio</Link>
            </div>
        </div>
    )
}