import React from "react";

import SeeButton from "../SeeButton";

import useLanguage from "../../hooks/useLanguage";

import styles from "./styles.module.scss";

const Article = ({number, date, timeToRead, title, description, href}) => {
    const {lang} = useLanguage()
    const isLanguageES = lang === "es";
    return (
    <div className={styles.article}>
        <div className={styles.articleHeader}>
            <div className={styles.articleNumber}>{number}</div>
            <div className={styles.articleDescriptionContainer}>
                <span className={styles.articleDate}>{date}</span>
                <span className={styles.articleTimeToRead}>{`${timeToRead} mins read`}</span>
            </div>
        </div>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleDescription}>{description}</p>
        <SeeButton tag={isLanguageES ? "Ver articulo completo" : "See full article"} href={href} isAnchor/>
    </div>
    )
}

export default Article