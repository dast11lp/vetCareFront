import { CardSliderContent } from "../types/CardSliderContent"
import { Carousel } from "./Carousel"
import cat from "./../assets/img/cat.png";
import cat2 from "./../assets/img/cat2.png";
import dog from "./../assets/img/dog.png";
import dog2 from "./../assets/img/dog2.png";




export const Home = () => {


  const news: CardSliderContent[][] = [
    [
      {
        id: 1,
        title: "¿Cuándo vacunar a tu mascota?",
        resume: "Descubre cuándo y por qué es importante vacunar a tu mascota para proteger su salud.",
        image: cat,
      },
      {
        id: 2,
        title: "Cuidado dental en animales",
        resume: "La salud bucal de tu mascota es clave. Te contamos cómo prevenir problemas dentales desde casa.",
        image: dog,
      },
    ],
    [
      {
        id: 3,
        title: "La importancia de los chequeos veterinarios",
        resume: "Los controles veterinarios ayudan a prevenir enfermedades y cuidar mejor a tu mascota.",
        image: cat2,
      },
      {
        id: 4,
        title: "Alimentación saludable para perros y gatos",
        resume: "Conoce cómo elegir una dieta balanceada según la edad, tamaño y necesidades de tu mascota.",
        image: dog2,
      },
    ]
  ];


  return (
    <div className="home">
      <h2 className="home__title">Noticias</h2>
      <p className="home__pg">Revisa nuestras últimas noticias y mantente al día con  la salud de tu mascota</p>
      <Carousel content={news} />
    </div>
  )
}
