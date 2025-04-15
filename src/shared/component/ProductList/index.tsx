
import { useState } from "react";
import { Tabs, Carousel } from "antd";
import  styles from './list.module.css'
import ProductCard, {ProductProps} from "../ProductCard/index";
type Category = typeof categories[number];
export const categories = ["Наушники", "Проекторы", "Экраны", "Акустика", "Компоненты"];

export const products: Record<Category, ProductProps[]> = {
    "Наушники": Array(6).fill({
        id: 1,
        title: "Гарнитура Cooler Master CH331 USB",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 12,
        discount: "-15%",
        image: "/assets/img/headphones.png",
    }),
    "Проекторы": Array(6).fill({
        id: 1,
        title: "Гарнитура Cooler Master CH331 USB",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 12,
        discount: "-15%",
        image: "/assets/img/headphones.png",
    }),
    "Экраны": Array(3).fill({
        id: 1,
        title: "Гарнитура Cooler Master CH331 USB",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 12,
        discount: "-15%",
        image: "/assets/img/headphones.png",
    }),
    "Акустика": Array(4).fill({
        id: 1,
        title: "Гарнитура Cooler Master CH331 USB",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 12,
        discount: "-15%",
        image: "/assets/img/headphones.png",
    }),
     "Компоненты": Array(2).fill({
        id: 1,
        title: "Гарнитура Cooler Master CH331 USB",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 12,
        discount: "-15%",
        image: "/assets/img/headphones.png",
    }),
};
export default function PopularProducts() {
    const [activeKey, setActiveKey] = useState(categories[0]);

    return (
        <div className={`${styles.wrapper} product_carousel`}>
            <h3>Хиты продаж</h3>
            <div className="custom_tab">
                <Tabs
                    defaultActiveKey={categories[0]}
                    onChange={(key) => setActiveKey(key)}
                    items={categories.map((cat) => ({
                        key: cat,
                        label: cat,
                    }))}
                    className={styles.tabs}
                />
            </div>
            <Carousel
                dots={false}
                arrows
                slidesToShow={6}
                slidesToScroll={1}
            >
                {products[activeKey]?.map((product:ProductProps, idx:number) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </Carousel>
        </div>
    );
}
