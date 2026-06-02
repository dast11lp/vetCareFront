import { createSlice } from "@reduxjs/toolkit";
import { ServiceContent } from "../../types/Service";

import injection from "./../../assets/img/injection.png";
import appointment from "./../../assets/img/vet.png";
import laboratory from "./../../assets/img/microscope.png";
import stylePet from "./../../assets/img/style.jpg";

interface InitialState {
    services: ServiceContent[]
}

const services: ServiceContent[] = [
  {
    id: 1,
    title: 'Vacunación',
    url: 'vacunacion',
    img: injection,
    paragraph:
      'Protege la salud de tu mascota con un plan de vacunación adecuado. Aplicamos vacunas esenciales para prevenir enfermedades y mantener su bienestar en cada etapa de vida.',
  },
  {
    id: 2,
    title: 'Consulta general',
    url: 'general',
    img: appointment,
    paragraph:
      'Nuestro equipo veterinario realiza revisiones completas para evaluar la salud de tu mascota, resolver molestias y ofrecer un diagnóstico oportuno y confiable.',
  },
  {
    id: 3,
    title: 'Laboratorio',
    url: 'laboratorio',
    img: laboratory,
    paragraph:
      'Contamos con servicios de laboratorio para exámenes clínicos y diagnósticos precisos, ayudando a detectar enfermedades y monitorear la salud de tu mascota.',
  },
  {
    id: 4,
    title: 'Baño y corte',
    url: 'baño',
    img: stylePet,
    paragraph:
      'Brindamos servicios de higiene y estética para mantener a tu mascota limpia, cómoda y saludable, con baño, cepillado y corte adaptado a sus necesidades.',
  },
];

const initialState: InitialState = {
    services
}

const getServicesSlice = createSlice({
    name: 'getServices',
    initialState,
    reducers: {}
})

export default getServicesSlice.reducer