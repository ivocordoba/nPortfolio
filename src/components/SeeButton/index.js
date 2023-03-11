import useSection from "hooks/useSection";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss"

const SeeButton = ({tag, href, sectionNumber, isAnchor}) => {
    const {changeSection} = useSection();
    return (
        <>
        {isAnchor ?
        <a className={styles.seeButton} href={`${href}`}>
            <svg className={styles.seeSvg} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path className={styles.firstPath} d="M15 10l5 5-5 5" />
            <path className={styles.secondPath} d="M4 4v7a4 4 0 004 4h12" />
            </svg>
            <p className={styles.seeTag}>
            {tag}
            </p>
        </a>
        :    
        <Link className={styles.seeButton} to={href} onClick={() => changeSection(sectionNumber)}>
            <svg className={styles.seeSvg} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path className={styles.firstPath} d="M15 10l5 5-5 5" />
            <path className={styles.secondPath} d="M4 4v7a4 4 0 004 4h12" />
            </svg>
            <p className={styles.seeTag}>
            {tag}
            </p>
        </Link>
        }
        </>
    )
}

export default SeeButton