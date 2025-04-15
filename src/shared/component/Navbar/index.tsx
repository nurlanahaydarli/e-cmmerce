import styles from './navbar.module.css'
import LogoIcon from "../../../../public/assets/svg/Logo";
import MenuIcon from "../../../../public/assets/svg/MenuIcon";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import HeartIcon from "../../../../public/assets/svg/HeartIcon";
import BasketIcon from "../../../../public/assets/svg/BasketIcon";
import UserIcon from "../../../../public/assets/svg/UserIcon";

export default function Navbar(){
    return(
        <>
            <div className={styles.navbar_box}>
               <div className={styles.logo_box}>
                   <LogoIcon />
               </div>
                <div className={styles.catalog_box}>
                    <MenuIcon />
                    <span>Каталог</span>
                </div>
                <div className='search_box'>
                    <Input prefix={<SearchOutlined />} placeholder='Поиск' />
                </div>
                <div className={styles.navbar_right}>
                    <ul>
                        <li>
                            <HeartIcon />
                            <span>12</span>
                            <p>Избранное</p>
                        </li>
                        <li>
                            <BasketIcon />
                            <p>Корзина</p>
                        </li>
                        <li>
                            <UserIcon />
                            <p>Войти</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}