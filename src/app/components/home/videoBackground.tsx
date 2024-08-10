

export const VideoBackground = () => {
    return (
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <div className="absolute top-[70vh] flex justify-center items-center w-[100%] z-10">
                <button className="bg-violet-300 font-sans text-2xl border-2 border-violet-400 p-4 rounded-xl
                 hover:bg-violet-400 transition hover:bg-transparent hover:shadow-violet-900/90 hover:shadow-xl">
                    Productos más vendidos</button>
            </div>
            <video src={require('../../../../public/recorte.mp4')} autoPlay muted loop />
        </div>
    )
}

