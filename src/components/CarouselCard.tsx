import React from 'react';
import { CardSliderContent } from '../types/CardSliderContent';
import { Link } from 'react-router-dom';

interface Props {
    content: CardSliderContent
}

export const CarouselCard: React.FC<Props> = ({ content }) => {
    return (
        <div className="card-carousel">
            <div className="card-carousel__content">
                <h3 className="card-carousel__content__title">{content.title}</h3>
                <p className="card-carousel__content__pg">{content.resume}</p>
                <Link className="card-carousel__content__link" to="/servicios">
                    Saber más <span className="card-carousel__content__arrow">→</span>
                </Link>
            </div>
            <div className="card-carousel__image">
                <img className="card-carousel__image__img" src={content.image} alt={content.title} />
            </div>
        </div>
    )
}