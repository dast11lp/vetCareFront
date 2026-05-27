import { CardSliderContent } from "../types/CardSliderContent"
import { Carousel } from "./Carousel"




export const Home = () => {


  const news: CardSliderContent[][] = [
    [{
      id: 1,
      title: "¿Cuándo vacunar a tu mascota?",
      resume: "En VetCare nos dedicamos al bienestar de tu mascota. Contamos con especialistas en medicina general, cirugía, odontología y estética animal",
    },
    {
      id: 2,
      title: "Cuidado dental en animales",
      resume: "La salud bucal de tu mascota es clave. Te contamos cómo prevenir problemas dentales desde casa.",
    },],
    [{
      id: 1,
      title: "¿Cuándo vacunar a tu mascota?",
      resume: "En VetCare nos dedicamos al bienestar de tu mascota. Contamos con especialistas en medicina general, cirugía, odontología y estética animal",
    },
    {
      id: 2,
      title: "Cuidado dental en animales",
      resume: "La salud bucal de tu mascota es clave. Te contamos cómo prevenir problemas dentales desde casa.",
    },],
  ]


  return (
    <div className="home">
      <h2 className="home__title">News</h2>
      <p className="home__pg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque illo iste, est dolores fuga voluptate quisquam itaque nemo nulla esse mollitia odit ab porro eveniet provident sit atque similique nobis!</p>
      <Carousel content={news} />
    </div>
  )
}
