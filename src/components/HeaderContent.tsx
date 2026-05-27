import { Link } from "react-router-dom";

export const HeaderContent = () => {
    return (
        <div className="header__content">
            <div className="header__content__left">
                <h1 className="header__content__left__title">Ellos tambien necesitan tu ayuda</h1>
                <p className="header__content__left__pg">
                    En VetCare nos dedicamos al bienestar de tu mascota. Contamos con especialistas en medicina general, cirugía, odontología y estética animal.
                </p>
                <Link className="btn btn--flex text-dec-none" to="/contacto">Más info.</Link>
            </div>
            <div className="header__content__right"></div>
            <div className="header__content__bottom">
                <div className="header__content__bottom__info">
                    <h3>Especialistas</h3>
                    <p className="header__content__bottom__info__details">5</p>
                </div>
                <div className="header__content__bottom__info">
                    <h3>Servicios disponibles</h3>
                    <p className="header__content__bottom__info__details">8</p>
                </div>
                <div className="header__content__bottom__info">
                    <h3>Años de experiencia</h3>
                    <p className="header__content__bottom__info__details">+10</p>
                </div >
                <div className="header__content__bottom__info">
                    <h3>Mascotas atendidas</h3>
                    <p className="header__content__bottom__info__details">+500</p>
                </div>
            </div>

        </div>
    )
}
