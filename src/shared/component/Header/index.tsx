import {Carousel} from "antd";
import styles from './header.module.css'

type headerType = {
    hasButton?: boolean;
    text: string;
    size: 'small' | 'large';
}
export default function Header({size = 'small', hasButton, text}: headerType) {
    return (
        <>
            <div className={styles.header_box}>
                <Carousel arrows infinite={true}>
                    {Array.from({length:4}).map((_, idx) => (
                        <div key={idx}  className={`${styles.header_content} ${size && styles[size]}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/img/header.png" alt=""/>
                            <div className={styles.text_box}>
                                <h4>
                                    {text}
                                </h4>
                                {hasButton && (<button>Купить</button>)}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}