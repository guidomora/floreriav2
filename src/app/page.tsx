import { Metadata } from "next";
import { VideoBackground } from "./components/home/videoBackground";


export const metadata:Metadata = {
  title:"Floreria Morabito",
  description:'Ramos premium, condolencias, cajas de flores, envio de flores, coronas, ramos de novia, regalos,',
  keywords:'ramos, envio de flores, puerto madero, condolencias, coronas, premium',
  openGraph: {
    title: 'Floreria Morabito',
    description: 'Ramos premium, condolencias, cajas de flores, envio de flores, coronas, ramos de novia, regalos',
    url: 'https://www.floreriamorabito.com.ar',
    type: 'website',
    // TODO: og image
    // images: [
    //   {
    //     url: '/images/og-image.jpg', // Asegúrate de que esta imagen esté en tu carpeta pública
    //     width: 800,
    //     height: 600,
    //     alt: 'Floreria Morabito',
    //   },
    // ]
  }
}

export default function Home() {
  return (
    <>
      <VideoBackground />
    </>
  );
}
