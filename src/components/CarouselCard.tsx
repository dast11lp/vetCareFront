import cat from '../assets/img/cat.png'

export const CarouselCard = ({content}) => {

    console.log("que está lelgando acá?", content);
    

    return (
        <div className="card-carousel">
            <div className="card-carousel__content">
                <h3 className="card-carousel__content__title">{content.title}</h3>
                <p className="card-carousel__content__pg">
                    {content.resume}
                </p>
                <a href="">Read more</a>
            </div>
            <div className='card-carousel__image'>
                <img className="card-carousel__image__img" src={cat} alt="cat" />
            </div>
        </div>
    )
}
