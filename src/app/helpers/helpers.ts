export const titleChange = (title:string) => {
    switch (title) {
        case 'Caja':
          return "Cajas"
        case 'Ramo':
          return "Ramos"
        case 'Condolencias':
          return "Coronas y bouquets"
        case 'Arreglo floral':
          return "Arreglos personalizados"
        default:
          return ''
      }
}


const metaDescriptionCajas = 'Cajas de flores de distintos tamaños, cajas de flores con chocolates. Envio de cajas con flores. Cajas premium para cumpleaños, regalos, festejos.' 
const metaDescriptionRamos = 'Ramos de flores para regalar, cumpleaños y festejos. Envio de ramos de flores. Ramos de flores premium' 
const metaDescriptionCoronas = 'Coronas de flores y bouquets para condolencias. Envios en el momento. Coronas premium. Llegamos a toco CABA y provincia' 
const metaDescriptionArreglos = 'Arreglos florales personalizados para ocasiones especiales. Armado de todo tipo de arreglos' 

export const descriptionSelector = (id:string) => {
  switch (id) {
    case 'Caja':
      return metaDescriptionCajas
    case 'Ramo':
      return metaDescriptionRamos
    case 'Condolencias':
      return metaDescriptionCoronas
    case 'Arreglo':
      return metaDescriptionArreglos
    default:
      return ''
  }
}


export interface Preferidos{
  img:string;
  title:string;
  productLink:string;
  category:string;
  categoryLink:string;
}

export const preferidos:Preferidos[] = [
  {img:"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/ramo24.jpeg?alt=media&token=e9aff44d-779e-4943-bec6-bb7cd567346d",
     title:"Ramo premium grande", productLink:"/producto/Ramo_Premium_grande", category:"Ramos", categoryLink:"/categoria/Ramo"},
  {img:"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/caja1.jpg?alt=media&token=c4815e5c-70fc-4acb-8de2-73da09be5a4a",
     title:"Caja de rosas rojas y blancas", productLink:"/producto/Caja_de_rosas_rojas_y_blancas", category:"Cajas", categoryLink:"/categoria/Caja"},
  {img:"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/caja6.jpeg?alt=media&token=70c02fd8-b7fb-42f0-8197-c45660873239",
     title:"Caja variada L", productLink:"/producto/Caja_variada_L", category:"Cajas", categoryLink:"/categoria/Caja"},
]