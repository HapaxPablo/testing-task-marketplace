import { Image } from 'antd';
import styles from './card.module.scss'
import { Advertisment } from '../../types';

const placeholderImage = "https://an-good.ru/assets/snippets/phpthumb/noimage.svg";

const Card = (props: Advertisment) => {

    const { imageUrl, name, price, likes, views, id } = props


    return (
        <div className={styles.card} key={id}>
            <div className={styles.card__img}>
                <Image
                    src={imageUrl || placeholderImage}
                    alt={name}
                />
            </div>
            <div className={styles.card__name}>{name}</div>
            <div className={styles.card__cost}>{price}</div>
            <div className={styles.card__icons}>
                <div className={styles.card__icons__views}>{views}</div>
                <div className={styles.card__icons__likes}>{likes}</div>
            </div>
        </div>
    )
}

export default Card
