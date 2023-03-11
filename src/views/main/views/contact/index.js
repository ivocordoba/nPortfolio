import React, {useState, useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import { default as confetti } from "canvas-confetti";

import Input from "components/Input";
import TextArea from "components/TextArea";

import useLanguage from "hooks/useLanguage";

import 'react-toastify/dist/ReactToastify.css';
import "./styles.scss"

const Contact = ({id}) => {
    const { lang } = useLanguage();
    const isLanguageES = lang === "es";
    const nameInput = useRef();
    const emailInput = useRef();
    const messageInput = useRef();

    const confettiAnimation = () => {
        confetti({
            particleCount: 2,
            angle: 40,
            spread: 100,
            origin: { x: 0.14, y: 1 },
            colors: ["#ffffff", "#b91f1f"]
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 1 },
            colors: ["#ffffff", "#b91f1f"]
        });  
    };

    const [isLoadingSumbit, setIsLoadingSumbit] = useState(false);
    const sendContact = async (e) => {
        e.preventDefault();
        setIsLoadingSumbit(true);
        const nameValue = nameInput.current.value;
        const emailValue = emailInput.current.value;
        const messageValue = messageInput.current.value;
        await new Promise(resolve => setTimeout(resolve, 2000));
        const initConfetti = setInterval(confettiAnimation, 15)
        toast.success(isLanguageES ? "Solicitud de contacto enviada" : "Contact message send", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        await new Promise(resolve => setTimeout(resolve, 1750));
        window.clearInterval(initConfetti)
        nameInput.current.value = "";
        emailInput.current.value = "";
        messageInput.current.value = "";
        setIsLoadingSumbit(false);
    }

    return(
    <div className="contactContainer" id={id}>
        <h1 className="contactTitle">{isLanguageES ? "CONTACTAME" : "GET IN TOUCH"}</h1>
        <p className="contactP">
            {isLanguageES ? 
            "¿Tenes un proyecto en mente? ¿Buscas asociarte a mi o que trabajemos juntos? Comunicate a través del formulario y me pondré en contacto con usted lo antes posible."
            :
            "Do you have a project in mind? Are you looking to partner with me or work together? Contact me through the form below and I will get back to you as soon as possible."
            }
        </p>            
        <form className="formContainer" onSubmit={sendContact}>
            <div className="formInputs">
                <div className="formFst">
                    <h5 className="formTitles">{isLanguageES ? "01.Nombre" : "01.Name"}</h5>
                    <div className="formItem">
                        <Input type="text" placeholder="name" ref={nameInput}/>
                    </div>
                    <h5 className="formTitles">02.Email</h5>
                    <div class="formItem">
                        <Input type="email" placeholder="email" ref={emailInput}/>
                    </div>
                </div>
                <div className="formScd">
                    <h5 className="formTitles">{isLanguageES ? "03.Mensaje" : "03.Message"}</h5>
                    <p>MAX-270 {isLanguageES ? "CARACTERES" : "CHARACTERS"}</p>
                    <div className="formItem">
                        <TextArea type="text" placeholder="Por que motivo te contactas?" maxLength="270" ref={messageInput}/>
                    </div>
                </div>
            </div>
            <button className="contactButton">{!isLoadingSumbit ? isLanguageES ? "ENVIAR" : "SEND" : <div className="loadingAnimation">{isLanguageES ? "CARGANDO" : "LOADING"}</div>}</button>
            <ToastContainer className="toast"/>
        </form>
    </div>
    )
}

export default Contact;