import React, {useCallback, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';


import US from "svg/flags/us.svg"
import ES from "svg/flags/es.svg"
import styles from "./styles.module.scss"
import useLanguage from 'hooks/useLanguage';
import useSection from 'hooks/useSection';

const Sidebar = () => {
    const {pathname} = useLocation();
    const {lang, changeLangES, changeLangEN} = useLanguage();
    const isLanguageES = lang === "es";
    const {selectedSection, changeSection} = useSection();
    
    const handleGoTo = async (e, num, id) => {
        if(pathname !== "/"){
            changeSection(0, num);
            await new Promise(resolve => setTimeout(resolve, 200))
            document.getElementById(id).scrollIntoView({behavior: "smooth"});
            return;
        }
        e.preventDefault();
        window.removeEventListener("scroll", setSelectedAnimation, true);
        changeSection(0 , num);
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
        await new Promise(resolve => setTimeout(resolve, 2500));
        window.addEventListener("scroll", setSelectedAnimation, true);
    }
  
    const setSelectedAnimation = useCallback(() => {
      const vh = (100 * window.pageYOffset) / window.innerHeight;
      if(vh >= 0 && vh < 90){
        changeSection(0, 0);
      }else if(vh >= 90 && vh < 190){
        changeSection(0, 1);
      }else{
        changeSection(0, 2);
      }
    }, [])
  
    useEffect(() => {
      if(selectedSection.section === 0){
        window.addEventListener("scroll", setSelectedAnimation, true);
      }else{
        window.removeEventListener("scroll", setSelectedAnimation, true);
      }
      window.scrollTo(0,0)
    }, [pathname])

    return(
        <div className={styles.sideBar}>
            <div className={styles.sideBarLinks}>
            <Link to='/' className={selectedSection.subSection === 0 ? styles.hoverableLinkSelected : styles.hoverableLink} onClick={e => handleGoTo(e, 0, "home")}>{isLanguageES ? "Principal" : "Home"}</Link>
            <Link to='/' className={selectedSection.subSection === 1 ? styles.hoverableLinkSelected : styles.hoverableLink} onClick={e => handleGoTo(e, 1, "resume")}>{isLanguageES ? "Resumen" : "Resume"}</Link>
            <Link to='/' className={selectedSection.subSection === 2 ? styles.hoverableLinkSelected : styles.hoverableLink} onClick={e => handleGoTo(e, 2, "contact")}>{isLanguageES ? "Contacto" : "Contact"}</Link>
            <div className={styles.divider}></div>
            <Link to='/projects' className={selectedSection.section === 1 ? styles.hoverableLinkSelected : styles.hoverableLink} onClick={() => changeSection(1)}>{isLanguageES ? "Projectos" : "Projects"}</Link>  
            <Link to='/articles' className={selectedSection.section === 2 ? styles.hoverableLinkSelected : styles.hoverableLink} onClick={() => changeSection(2)}>{isLanguageES ? "Articulos" : "Articles"}</Link>  
            </div>
            <div className={styles.sideBarLangs}>
                <img src={US} onClick={changeLangEN}/>
                <img src={ES} style={{marginLeft: "10px"}} onClick={changeLangES}/>
            </div>
            <h2 className={styles.sideBarMention}>@igcordoba</h2>
            <marquee className={styles.sideBarMarquee} width="100%" direction="left">
            アカサタハジギヰニヌツスウエポゼヂリロホ    
            </marquee>
        </div>
    )
}

export default Sidebar;