import React, {useState, useMemo, useRef} from "react";

import Input from "components/Input";
import Article from "components/Article";
import useLanguage from "hooks/useLanguage";

import styles from "./styles.module.scss";

import ERROR from "svg/icons/data_not_founded.svg"

const Articles = () => {
    const {lang} = useLanguage();
    const isLanguageES = lang === "es"
    const articleSearcher = useRef();

    const [selectedFilter, setSelectedFilter] = useState(0); 
    const [inputValue, setInputValue] = useState("");

    const makeArticles = () => {
        const ARTICLES ={
            "es": [
                {
                    number: 1, date: "22.07.2022", timeToRead: 30, title: "Introduccion a C++ y Matematica", href: "https://www.notion.so/1-Introduccion-a-C-y-Matematicas-04a33eb674a04aaabd92e9471be5e515", description: "Introduccion a salida y entrada de datos, tipos de datos, abreviaciones de codigo y topicos basicos de matematica"
                },
                {
                    number: 2, date: "6.07.2021", timeToRead: 60, title: "Complejidad de algoritmos", href: "https://www.notion.so/2-Complejidad-de-tiempo-del-Algoritmo-3f1407e5fa0a4f9cadc7993eaeaa25dc", description: "Notacion O (Big O), bucles anidados, como calcular complejidad y complejidad de algoritmos 'conocidos'"
                },
                {
                    number: 3, date: "11.02.2022", timeToRead: 10, title: "Tipos de datos", href: "https://www.notion.so/Tipos-de-datos-176742addeb2448ca376c9f7a43c14d7", description: "Tipos de datos en el lenguaje de especificacion formal"
                }
            ],
            "en": [
                {
                    number: 1, date: "22.07.2022", timeToRead: 30, title: "Introduction to C++ and Math", href: "https://www.notion.so/1-Introduccion-a-C-y-Matematicas-04a33eb674a04aaabd92e9471be5e515", description: "Introduction to data input and output, data types, code abbreviations and basic mathematical topics."
                },
                {
                    number: 2, date: "6.07.2021", timeToRead: 60, title: "Complexity of algorithms", href: "https://www.notion.so/2-Complejidad-de-tiempo-del-Algoritmo-3f1407e5fa0a4f9cadc7993eaeaa25dc", description: "Big O notation (Big O), nested loops, how to calculate complexity and complexity of 'known' algorithms"
                },
                {
                    number: 3, date: "11.02.2022", timeToRead: 10, title: "Types of data", href: "https://www.notion.so/Tipos-de-datos-176742addeb2448ca376c9f7a43c14d7", description: "Data types in the formal specification language"
                }
            ],
        }
        // TODO
        const articles = ARTICLES[lang];
        if(selectedFilter === 0 || selectedFilter === 1){
            articles.sort((a, b) => {
                const firstDate = new Date(a.date.split(".").join("/"))
                const secondDate = new Date(b.date.split(".").join("/"))
                if(firstDate.getTime() > secondDate.getTime()){
                    return -1;
                }else if(firstDate.getTime() < secondDate.getTime()){
                    return 1;
                }else{
                    return 0;
                }
            })
            if(selectedFilter === 1){
                articles.reverse();
            }
        }
        if(selectedFilter === 2 || selectedFilter === 3){
            articles.sort((a, b) => {
                const firstTTR = a.timeToRead
                const secondTTR = b.timeToRead
                if(firstTTR > secondTTR){
                    return -1;
                }else if(firstTTR < secondTTR){
                    return 1;
                }else{
                    return 0;
                }
            })
            if(selectedFilter === 3){
                articles.reverse();
            }
        }
        const sortedArticles = []
        let i = 1;
        articles.forEach(article => {
            if(article.title.toLowerCase().includes(inputValue.toLowerCase())){
                sortedArticles.push(
                <>
                    <Article number={i} timeToRead={article.timeToRead} date={article.date} title={article.title} description={article.description} href={article.href}/>
                    <div className={styles.divider}/>
                </>
                )
                i+=1;
            }
        })
        if(sortedArticles.length === 0){
            console.log("a")
            sortedArticles.push(
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 style={{alignSelf: "center"}}> Perdon no tenemos articulos con ese nombre</h1>
                    <img alt="error" src={ERROR} style={{alignSelf: "center", width: "256px", height: "256px", filter: ""}}/> 
                </div>
            )
        }
        return sortedArticles;
    };

    const lastestArticles = useMemo(makeArticles, [lang, selectedFilter, inputValue]);

    const changeSelectedFilter = (e, num) => {
        e.preventDefault();
        setSelectedFilter(num);
    }  

    return(
        <div className={styles.articlesContainer}>
            <h1 className={styles.articlesTitle}>ARTICLES</h1>
            <div className={styles.articlesMain}>
                <Input isSearch placeholder="Case insensitive" ref={articleSearcher} onChange={ e => setInputValue(e.target.value) }/>
                <div className={styles.filterMenu}>
                    <a href="/articles"  className={selectedFilter === 0 ? styles.filterOptionSelected : styles.filterOption} onClick={e => changeSelectedFilter(e, 0)}>
                        {isLanguageES ? "Ultimos Articulos" : "Lastest Articles"}
                    </a>
                    <a href="/articles"  className={selectedFilter === 1 ? styles.filterOptionSelected : styles.filterOption} onClick={e => changeSelectedFilter(e, 1)}>
                        {isLanguageES ? "Articulos Mas Antiguos" : "Oldest Projects"}
                    </a>
                    <a href="/articles"  className={selectedFilter === 2 ? styles.filterOptionSelected : styles.filterOption} onClick={e => changeSelectedFilter(e, 2)}>
                        {isLanguageES ? "Mas tiempo de lectura" : "More time to read"}
                    </a>
                    <a href="/articles"  className={selectedFilter === 3 ? styles.filterOptionSelected : styles.filterOption} style={{borderRight: "none"}} onClick={e => changeSelectedFilter(e, 3)}>
                        {isLanguageES ? "Menos tiempo de lectura" : "Less time to read"}
                    </a>
                </div>
                {lastestArticles}
            </div>
        </div>
    )
}

export default Articles