import React, { forwardRef } from "react";

import styles from "./styles.module.scss"

const TextArea = forwardRef(({type, placeholder, maxLength}, ref) => {
    return (
        <div className={styles.textAreaContainer}>
            <textarea className={styles.textAreaEffect} type={type} placeholder={placeholder} maxLength={maxLength} ref={ref}/>
            <span className={styles.textAreaFocus}></span>
        </div>
    )
})

export default TextArea;