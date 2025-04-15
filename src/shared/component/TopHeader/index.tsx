import styles from './topheader.module.css'
import BlueLocation from "../../../../public/assets/svg/BlueLocation";
import FireIcon from "../../../../public/assets/svg/FireIcon";

export default function TopHeader() {
    return (
        <>
            <div className={styles.top_box}>
                <div className={styles.top_container}>
                    <div className={styles.left_side}>
                        <BlueLocation/>
                        <span>Москва</span>
                    </div>
                    <div className={styles.right_list}>
                        <ul>
                            <li>
                                <FireIcon/>
                                <span>Акции</span>
                            </li>
                            <li>
                                <span>Статьи</span>
                            </li>
                            <li><span>Услуги</span></li>
                            <li><span>Доставка и оплата</span></li>
                            <li>
                                <span>Обмен и возврат</span>
                            </li>
                            <li>
                                <span>Гарантии</span>
                            </li>
                            <li>
                                <span>О нас</span>
                            </li>
                            <li>
                                <span>Контакты</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}