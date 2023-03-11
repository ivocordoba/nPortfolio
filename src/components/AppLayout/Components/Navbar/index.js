import React, {useEffect, useCallback, useState} from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss"
import useSection from "hooks/useSection";

import HOME from "svg/icons/home.svg"
import RESUME from "svg/icons/resume.svg"
import CONTACT from "svg/icons/contact.svg"
import PROJECTS from "svg/icons/projects.svg"
import ARTICLES from "svg/icons/articles.svg"
import ES from "svg/flags/es.svg"
import EN from "svg/flags/us.svg"
import useLanguage from "hooks/useLanguage";

const Navbar = () => {
    const {lang, changeLangES, changeLangEN} = useLanguage();
    const isLanguageES = lang === "es";
    const isMobile = useMediaQuery({ query: '(max-width: 688px)' })
    const {pathname} = useLocation();
    const {selectedSection, changeSection} = useSection();
    const animationOptions =  {
        notMobile: {
            false: "180px",
            true: "-26px",
        },
        mobile: {
            false: "160px",
            true: "-46px",
        }
    }
    const [isVisibleTTP, setIsVisibleTTP] = useState(false) 

    const onClickEN = () => {
        setIsVisibleTTP(false);
        changeLangEN();
    }
    const onCLickES = () => {
        setIsVisibleTTP(false);
        changeLangES();
    }

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
    }, [changeSection])
  
    // useEffect(() => {
    //   if(selectedSection.section === 0){
    //     window.addEventListener("scroll", setSelectedAnimation, true);
    //   }else{
    //     window.removeEventListener("scroll", setSelectedAnimation, true);
    //   }
    //   window.scrollTo(0,0)
    // }, [pathname, selectedSection , setSelectedAnimation])

    return (
        <div className={styles.navBarContainer}>
            {isMobile ?
            <>
                <Link to="/"  onClick={() => changeSection(0)}>
                    <div className={selectedSection.section === 0 ? styles.navBarItemSelected : styles.navBarItem}>
                        <img alt="home" src={HOME}/>
                    </div>
                </Link>
                <span className={styles.divider}>§</span>
            </>
            :
            <>
                <Link to="/"  onClick={e => handleGoTo(e, 0, "home")}>
                    <div className={selectedSection.subSection === 0 ? styles.navBarItemSelected : styles.navBarItem}>
                        <img alt="home" src={HOME}/>
                    </div>
                </Link>
                <span className={styles.divider}>§</span>
                <Link to="/" onClick={e => handleGoTo(e, 1, "resume")}>
                    <div className={selectedSection.subSection === 1 ? styles.navBarItemSelected : styles.navBarItem}>
                        <img alt="resume" src={RESUME}/>
                    </div>
                </Link>
                <span className={styles.divider}>§</span>
                <Link to="/" onClick={e => handleGoTo(e, 2, "contact")}>
                    <div className={selectedSection.subSection === 2 ? styles.navBarItemSelected : styles.navBarItem}>
                        <img alt="contact" src={CONTACT}/>
                    </div>
                </Link>
                <span className={styles.divider}>§</span>
            </>
            }
            <Link to="/projects" onClick={() => changeSection(1)}>
                <div className={selectedSection.section === 1 ? styles.navBarItemSelected : styles.navBarItem}>
                    <img alt="projects" src={PROJECTS}/>
                </div>
            </Link>
            <span className={styles.divider}>§</span>
            <Link to="/articles" onClick={() => changeSection(2)}>
                <div className={selectedSection.section === 2 ? styles.navBarItemSelected : styles.navBarItem} >
                    <img alt="articles" src={ARTICLES}/>
                </div>
            </Link>
            <div className={styles.langContainer}>
                <div className={styles.langSelecter} style={{'left': isMobile ? animationOptions.mobile[isVisibleTTP] : animationOptions.notMobile[isVisibleTTP]}}>
                    <img alt="en" src={EN} width={24} height={24} onClick={onClickEN}/>
                    <img alt="us" src={ES} width={24} height={24} onClick={onCLickES}/>
                </div>
                <img alt="langSelector" src={isLanguageES ? ES : EN} width={24} height={24}  onClick={() => setIsVisibleTTP(isVisibleTTP ? false : true)}/>
            </div>
        </div>
    )
}

export default Navbar;