import React from "react";

import styles from "./styles.module.scss"

const Project = ({title, subTitle, description, img}) => {
    return (
    <a href="https://github.com/ivocordoba/tpCensoFacu">
    <div className={styles.project}>
        <img alt="projectImg" className={styles.projectImg} src={img}></img>
        <h2 className={styles.projectTitle}>{title}</h2>
        <h3 className={styles.projectSubTitleItalic}>{subTitle}</h3>
        <p className={styles.projectDescription}>{description}</p>
    </div>
    </a>
    )
}

export default Project;