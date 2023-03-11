import React, {useMemo} from "react";
import { useMediaQuery } from "react-responsive";

import Article from "components/Article"
import Project from "components/Project";
import SeeButton from "components/SeeButton"
import ListTitle from "components/ListTitle";

import useLanguage from "hooks/useLanguage";

import "./styles.scss"

const Home = () => {
    const { lang } = useLanguage();
    const isLanguageES = lang === "es";
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    const PROJECTOS = {
        "es":[
            {
                title: "Censo", subTitle:"C++, Google Test", description:"Funcionalidad usando datos del Censo Argentino", img:"https://learn.g2.com/hs-fs/hubfs/Digital%20Marketing%20Stats.png?width=2960&name=Digital%20Marketing%20Stats.png"
            },
            {
                title: "Desafios", subTitle:"C++, Javascript", description: "Desafios de codigo en C++(codeforces) y Javascript(codewars)", img:"https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2022/03/04/seguridad.r_d.960-540.jpeg"
            }
            ],
        "en":[
            {
                title: "Census", subTitle:"C++, Google Test", description:"Functionality using Argentine Census data", img:"https://learn.g2.com/hs-fs/hubfs/Digital%20Marketing%20Stats.png?width=2960&name=Digital%20Marketing%20Stats.png"
            },
            {
                title: "Challenges", subTitle:"C++, Javascript", description: "Challenges using C++(Codeforces) and Javascript(Codwars)", img:"https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2022/03/04/seguridad.r_d.960-540.jpeg"
            }
            ]
    }
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
    const makeProjects = () => {
        const projects = [];
        if(PROJECTOS[lang] !== undefined){
            PROJECTOS[lang].forEach(project => {
                projects.push(<Project title={project.title} subTitle={project.subTitle} description={project.description} img={project.img}/>)
            })
        }
        return projects;
    }
    const makeArticles = () => {
        const articles = [];
        if(ARTICLES[lang] !== undefined){
            ARTICLES[lang].forEach(article => {
                articles.push(<Article number={article.number} timeToRead={article.timeToRead} date={article.date} title={article.title} description={article.description} href={article.href}/>)
            })
        }
        return articles;
    };
    const lastestProjects = useMemo(makeProjects, [lang]);
    const lastestArticles = useMemo(makeArticles, [lang]);

    return (
        <div id="home-content">
            <div className="header">
                <h1 className="title">Ivo Cordoba</h1>
                <h1 className="subTitleItalic">{isLanguageES ? "Desarollador Frontend" : "Frontend Developer"}</h1>
            </div>
        <div className="containerH">
            <div className="firstContent">
                {isTabletOrMobile && 
                <div className="aboutMeContainer">
                    <ListTitle text={isLanguageES ? "Acerca de mi" : "About me"}/>
                    <p className="presentationP"> 
                    {isLanguageES ?
                    <>Hola, soy un frontend-dev Argentino, tengo 20 a;os, aca vas a poder ver mis articulos y tambien mis projectos tanto personales como universitarios, si queres podes seguir viendo mi <a>resumen</a> </>
                    :
                    <>Hello, I'm an Argentinean frontend-dev, I'm 20 years old, here you can see my articles and also my personal and university projects, if you want you can continue to see my <a>summary</a> </>
                    }
                    </p>
                </div>
                }
                <div className="lastestProjectsContainer">
                    <ListTitle text={isLanguageES ? "Ultimos Proyectos" : "Lastest Projects"} />
                    <div className="lastestProjects">
                        {lastestProjects}
                    </div>
                    <SeeButton tag={isLanguageES ? "Ver Mas Proyectos" : "See All Projects"} href="/projects" sectionNumber={1}/>
                </div>
            </div>
            <div className="secondContent">
                {!isTabletOrMobile && 
                <div className="aboutMeContainer">
                    <ListTitle text={isLanguageES ? "Acerca de mi" : "About me"}/>
                    <p className="presentationP"> 
                    {isLanguageES ?
                    <>Hola, soy un frontend-dev Argentino, tengo 20 a;os, aca vas a poder ver mis articulos y tambien mis projectos tanto personales como universitarios, si queres podes seguir viendo mi <a>resumen</a> </>
                    :
                    <>Hello, I'm an Argentinean frontend-dev, I'm 20 years old, here you can see my articles and also my personal and university projects, if you want you can continue to see my <a>summary</a> </>
                    }
                    </p>
                </div>
                }
                <div className="articleContainer">
                    <ListTitle text={isLanguageES ? "Ultimos Articulos" : "Lastest Articles"}/>
                    {lastestArticles[0]}
                    {lastestArticles[1]}
                    {isTabletOrMobile &&
                    lastestArticles[2]
                    }
                   <SeeButton tag={isLanguageES ? "Ver mas articulos" : "See all articles"} href="/articles" sectionNumber={2}/>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;