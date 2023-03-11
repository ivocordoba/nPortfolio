import React, {useCallback, useEffect, useState, useRef} from "react";

import Home from "./views/home"
import Resume from "./views/resume";
import Contact from "./views/contact";

const Main = () => {
    return(
            <div>
                <Home/>
                <Resume id="resume"/>
                <Contact id="contact"/>
            </div>
    )
}

export default Main;