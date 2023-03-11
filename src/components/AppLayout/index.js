import React from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import styles from "./styles.module.scss"

const AppLayout = ({children}) => {
    const isTablet = useMediaQuery({ query: '(max-width: 1064px)' })
    return(
        <div className={styles.pageContainer} id="home">
            {!isTablet &&
            <Sidebar/>
            }
            <div className={styles.pageContent}>
                {children}
            </div>
            {isTablet &&
            <Navbar/>
            }
        </div>
    )
}

export default AppLayout;