import React from "react";

import styles from "./styles.module.scss"

const ListTitle = ({text}) => {
    return(
        <h3 className={styles.listTitle}>{text}</h3>
    )
}

export default ListTitle