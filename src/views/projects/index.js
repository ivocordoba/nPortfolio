import React, {useMemo, useRef, useState} from "react";

import Input from "components/Input";
import Project from "components/Project";
import useLanguage from "hooks/useLanguage";

import styles from "./styles.module.scss";

const Projects = () => {
    const {lang} = useLanguage();
    const projectSearcher = useRef();
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

    const [inputValue, setInputValue] = useState("")

    const makeProjects = () => {
        const projects = [];
        if(PROJECTOS[lang] !== undefined){
            PROJECTOS[lang].forEach(project => {
                if(project.title.toLowerCase().includes(inputValue.toLowerCase())){
                    projects.push(<Project title={project.title} subTitle={project.subTitle} description={project.description} img={project.img}/>)
                }
            })
        }
        return projects;
    }

    const lastestProjects = useMemo(makeProjects, [lang, inputValue]);

    return(
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>PROJECTS</h1>
            <div className={styles.projectsMain}>
                <Input isSearch placeholder="Case insensitive" ref={projectSearcher} onChange={e => setInputValue(e.target.value)}/>
                {lastestProjects}
                {lastestProjects}
                {lastestProjects}
            </div>
        </div>
    )
}

export default Projects