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
    // TODO:
    images: [
        // https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/floreriaMeta.png?alt=media&token=442db6e1-c2fc-465c-98a2-886ac344e793
        // https://floreriav2.vercel.app/
        'https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/floreriaMeta.png?alt=media&token=442db6e1-c2fc-465c-98a2-886ac344e793'
    ]
  }
}

export default function Home() {
  return (
    <>
      <VideoBackground />
    </>
  );
}
