import styles from './list.module.css'
import UpperIcon from "../../../../public/assets/svg/UpperIcon";

export default function CategoryList(){
    return(
        <>
            <div className={styles.category_list}>
                <h4>
                    Популярные категории
                </h4>
                <div className={styles.categories}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className={styles.category_item}>
                            <div className={styles.category_box}>
                                <h5>Наушники</h5>
                                <div className={styles.category_bottom}>
                                    <button>
                                        <UpperIcon />
                                    </button>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/img/category_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}