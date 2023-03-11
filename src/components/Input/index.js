import React, { forwardRef } from "react";

import styles from "./styles.module.scss";

import SEARCH from "svg/icons/search-alt.svg"

const Input = forwardRef(({type, placeholder, isSearch, onChange}, ref) => {
    return(
        <div className={styles.inputContainer}>
            {isSearch &&
            <img alt="inputIcon" src={SEARCH} className={styles.inputImg}/>
            }
            <input className={styles.inputEffect} style={isSearch ? {paddingLeft: "35px"} : {}} type={type} placeholder={placeholder} ref={ref} onChange={onChange}/> 
            <span className={styles.inputFocusBorder}></span>
        </div>
    )
})

export default Input;