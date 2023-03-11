import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("en")
    const changeLangES = () => setLang("es")
    const changeLangEN = () => setLang("en")
    return(<LanguageContext.Provider value={{lang, changeLangES, changeLangEN}}>{children}</LanguageContext.Provider>)
}
