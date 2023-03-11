import React, { createContext, useState } from "react";

export const SectionContext = createContext();

export const SectionProvider = ({children}) => {
    const [selectedSection, setSelectedSection] = useState(
        {
            section: 0,
            subSection: 0,
        }
    )
    const changeSection = (section, subSection = null) => {
        setSelectedSection({
            section: section,
            subSection: subSection
        })
    }
    return(<SectionContext.Provider value={{selectedSection, changeSection}}>{children}</SectionContext.Provider>)
}