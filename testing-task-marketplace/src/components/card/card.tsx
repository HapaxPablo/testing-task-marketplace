import { Image } from 'antd';
import './card.scss'
import { Advertisment } from '../../types';

const placeholderImage = "https://an-good.ru/assets/snippets/phpthumb/noimage.svg";

const Card = (props: Advertisment) => {

    const { imageUrl, name, price, likes, views, id } = props


    return (
        <div className="card" key={id}>
            <div className="card__img">
                <Image
                    src={imageUrl || placeholderImage}
                    alt={name}
                />
            </div>
            <div className="card__name">{name}</div>
            <div className="card__cost">{price}</div>
            <div className='card__icons'>
                <div className="card__icons__likes">{likes}</div>
                <div className="card__icons__views">{views}</div>
            </div>
        </div>
    )
}

export default Card
