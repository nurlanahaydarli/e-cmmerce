
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import styles from '../ProductList/list.module.css';
import StarIcon from "../../../../public/assets/svg/StarIcon";

export interface ProductProps {
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    discount?: string;
}

export default function ProductCard({ image, title, price, oldPrice, rating, reviews, discount }: ProductProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} />
                <HeartOutlined className={styles.heart} />
                {discount && (
                    <div className={styles.discount}>
                        <p>{discount}</p>
                        <p>Хит продаж</p>
                    </div>
                )}
            </div>
            <div className={styles.card_info}>
                <div className={styles.price_block}>
                    <p className={styles.price}>{price} ₽</p>
                    <span className={styles.old_price}>{oldPrice} ₽</span>
                </div>
                <h5>{title}</h5>
                <div className={styles.rating}>
                    <StarIcon />
                    <p>{rating}</p>
                    <span> ({reviews} оценок)</span>
                </div>
                <Button type="primary" block>
                    Купить
                </Button>
            </div>
        </div>
    );
}
