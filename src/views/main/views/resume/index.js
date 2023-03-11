import React from "react";
import { useMediaQuery } from "react-responsive";

import useLanguage from "hooks/useLanguage";
import ListTitle from "components/ListTitle";

import "./styles.scss";

import HTML5 from "svg/icons/html5.svg"
import CSS from "svg/icons/css3.svg"
import REACT from "svg/icons/react.svg"
import ANT_DESIGN from "svg/icons/ant-design.svg"
import JS from "svg/icons/javascript.svg"
import CPP from "svg/icons/cpp.svg"
import PYTHON from "svg/icons/python.svg"
import STATS from "svg/icons/stats.svg"
import GIT from "svg/icons/git.svg"

const Resume = ({id}) => {
    const { lang } = useLanguage();
    const isLanguageES = lang === "es";
    const is1312 = useMediaQuery({ query: '(max-width: 1312px)' })
    const is992 = useMediaQuery({ query: '(max-width: 992px)'})
    return (<div className="resumeContainer" id={id}>
        <div className="fstResume">
            <div className="resumeHeader">
                <h1 className="titleResume">Whoami</h1>
                <p className="pResume">
                    {isLanguageES ? 
                    <>Tengo 20 anios, soy un estudiante de la carrera <span>Ciencias de la Computacion</span> en la Universidad de Buenos Aires (segundo anio), durante el primer anio de pandemia finalice un cruso de <span>Javascript</span> y a partir de ahi comenze a desarollarme con la libreria <span>React</span> y sus librerias. Ademas trabaje con <span>C++</span> y <span>Haskell</span> para trabajos universitarios llevando a cabo projectos con estos lenguajes.</>
                    :
                    <>I'm 20 years old, I'm a <span>Computer Science</span> student at the University of Buenos Aires (second year), during the first year of pandemic I finished a <span>Javascript</span> course and since then I started to develop myself with the <span>React</span> library and its libraries. I also worked with <span>C++</span> and <span>Haskell</span> for university work carrying out projects with these languages.</>
                }
                    
                </p>
            </div>  
            <div className="skillsContainer">
                <div className="webSkillsContainer">
                    <ListTitle text="Web Skills"/>
                    <div className="webSkills">
                        <div className="webSkill">
                            <img alt="skillIcon" src={HTML5} width={54} height={54}></img>
                            <h3 className="webSkillTitle">HTML</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={CSS} width={54} height={54}></img>
                            <h3 className="webSkillTitle">CSS</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={JS} width={54} height={54}></img>
                            <h3 className="webSkillTitle">JS</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={REACT} width={54} height={54}></img>
                            <h3 className="webSkillTitle">REACT</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={ANT_DESIGN} width={54} height={54}></img>
                            <h3 className="webSkillTitle">ANTD</h3>
                        </div>
                    </div>
                </div>
                <div className="generalSkillsContainer">
                <ListTitle text="General Skills"/>
                    <div className="generalSkills">
                        <div className="webSkill">
                            <img alt="skillIcon" src={GIT} width={54} height={54}></img>
                            <h3 className="webSkillTitle">GIT</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={CPP} width={54} height={54}></img>
                            <h3 className="webSkillTitle">C++</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={PYTHON} width={54} height={54}></img>
                            <h3 className="webSkillTitle">PYTHON</h3>
                        </div>
                        <div className="webSkill">
                            <img alt="skillIcon" src={STATS} width={54} height={54}></img>
                            <h3 className="webSkillTitle">{isLanguageES ? "DATOS" : "DATA"}</h3>
                        </div>
                    </div>
                </div>
                {!is1312 &&
                <div className="educationContainer">
                    <ListTitle text={isLanguageES ? "Educacion" : "Education"}/>
                    <div className="educationGrid">
                        <div className="educationItemF">
                            <div>{isLanguageES ? "01.SECUNDARIO" : "01.HIGH-SCHOOL"}</div>
                            <span>02.03.2014 - 21.12.2019</span>
                            <span>Instituto Hermanos Amezola</span>
                            <span>Bachillerato en</span>
                            <span>economia y administracion</span>
                        </div>
                        <div className="educationItem">
                            <div>02.CURSO JS</div>
                            <span>15.07.2020 - 15.10.2020</span>
                            <span>Coderhouse</span>
                            <span>Curso basico de Javascript</span>
                            <span>CSS & HTML</span>
                        </div>
                        <div className="educationItem">
                            <div>{isLanguageES ? "03.UNIVERSIDAD" : "03.UNIVERSITY"}</div>
                            <span>01.04.2020 - X</span>
                            <span>Universidad Buenos Aires</span>
                            <span>Ciencias de la Computacion</span>
                            <span>Segundo anio</span>
                        </div>
                    </div>
                </div>
                }
                {is1312 &&
                <div className="generalSndContainer">
                    <ListTitle text={isLanguageES ? "Lenguajes" : "Languages"}/>
                    <div>{isLanguageES ? "1.Español" : "1.Spanish"}</div>
                    <span>{isLanguageES ? "Nativo" : "Native"}</span>
                    <div>{isLanguageES ? "2.Ingles" : "2.English"}</div>
                    <span>{isLanguageES ? "Intermedio" : "Intermediate"}</span>
                </div>
                }
            </div> 
            {!is992 &&
            <button className={"downloadButton"}>
                ~~~~~~
                <span style={{margin: "0 24px"}}>{isLanguageES ? "Descargar CV como PDF" : "Download CV as PDF"}</span>
                ~~~~~~
            </button>
            }
        </div>
        <div className="sndResume">
            {!is1312 && 
                <div className="generalSndContainer">
                    <ListTitle text={isLanguageES ? "Lenguajes" : "Languages"}/>
                    <div>{isLanguageES ? "1.Español" : "1.Spanish"}</div>
                    <span>{isLanguageES ? "Nativo" : "Native"}</span>
                    <div>{isLanguageES ? "2.Ingles" : "2.English"}</div>
                    <span>{isLanguageES ? "Intermedio" : "Intermediate"}</span>
                </div>
            }
            {!is1312 &&
                <div className="generalSndContainer">
                    <ListTitle text={isLanguageES ? "Intereses" : "Interests"}/>
                    <span>1.SKERE</span>
                    <span>1.SKERE</span>
                    <span>1.SKERE</span>
                    <span>1.SKERE</span>
                    <span>1.SKERE</span>
                </div>
            }
            {is1312 && 
            <div className="educationContainer">
                    <ListTitle text={isLanguageES ? "Educacion" : "Education"}/>
                    <div className="educationGrid">
                        <div className="educationItemF">
                            <div>{isLanguageES ? "01.SECUNDARIO" : "01.HIGH-SCHOOL"}</div>
                            <span>02.03.2014 - 21.12.2019</span>
                            <span>Instituto Hermanos Amezola</span>
                            <span>Bachillerato en</span>
                            <span>economia y administracion</span>
                        </div>
                        <div className="educationItem">
                            <div>02.CURSO JS</div>
                            <span>15.07.2020 - 15.10.2020</span>
                            <span>Coderhouse</span>
                            <span>Curso basico de Javascript</span>
                            <span>CSS & HTML</span>
                        </div>
                        <div className="educationItem">
                            <div>{isLanguageES ? "03.UNIVERSIDAD" : "03.UNIVERSITY"}</div>
                            <span>01.04.2020 - X</span>
                            <span>Universidad Buenos Aires</span>
                            <span>Ciencias de la Computacion</span>
                            <span>Segundo anio</span>
                        </div>
                    </div>
            </div>
            }
            <div className="generalSndContainerL">
                <ListTitle text={isLanguageES ? "Links de Contacto" : "Contact Links"}/>
                <div>1.GMAIL</div>
                <span>cordobaivo33@gmail.com</span>
                <div>2.GITHUB</div>
                <span>https://github.com/ivocordoba</span>
                <div>3.LINKEDIN</div>
                <span>cordobaivo33@gmail.com</span>
            </div>
        </div>
        {is992 && is1312 &&
        <button className={"downloadButton"}>
            Download CV as PDF
        </button>
        }
    </div>)
}

export default Resume;