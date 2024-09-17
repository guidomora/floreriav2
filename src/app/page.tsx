import { Metadata } from "next";
import { VideoBackground } from "./components/home/videoBackground";
import '../../public/floreriaMeta.png'

export const metadata:Metadata = {
  title:"Floreria Morabito",
  description:'Ramos premium, condolencias, cajas de flores, envio de flores, coronas, ramos de novia, regalos,',
  keywords:'ramos, envio de flores, puerto madero, condolencias, coronas, premium',
  openGraph: {
    title: 'Floreria Morabito',
    description: 'Ramos premium, condolencias, cajas de flores, envio de flores, coronas, ramos de novia, regalos',
    url: 'https://www.floreriamorabito.com.ar',
    type: 'website',
    images: [
        'https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/floreriaMetaEdited.jpg?alt=media&token=adf6d9d9-3079-4f6c-a6f7-a017ae7c6ffb',
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
