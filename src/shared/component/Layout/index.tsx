import Footer from "../Footer/index";
import {ReactNode} from "react";
import styles from './layout.module.css'
import Navbar from "../Navbar/index";
import TopHeader from "../TopHeader/index";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps){
    return(
        <>
            <div>
                <TopHeader />
            </div>
            <div className={styles.content_container}>
                <Navbar />
                <div className="main-content">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}