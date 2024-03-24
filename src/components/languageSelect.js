import { useTranslation } from "react-i18next";

import EnFlag from "../data/img/en.gif"
import DeFlag from "../data/img/de.gif"
import RuFlag from "../data/img/ru.gif"
import EsFlag from "../data/img/es.gif"
import JpFlag from "../data/img/jp.gif"
import { useEffect, useState } from "react";



export default function LanguageSelect(props){

    const [displayText, setDisplayText] = useState("Select your language:");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        props.SelectedLanguage()
      }
    
      const [t, i18n] = useTranslation("global");

      useEffect(() => {
        const intervalId = setInterval(() => {
          // Toggle between different languages for the display text
          if (displayText === t("Select your language:")) {
            setDisplayText(t("Bitte wählen Sie Ihre Sprache:"));
          } else if (displayText === t("Bitte wählen Sie Ihre Sprache:")) {
            setDisplayText(t("Por favor seleccione su idioma:"));
          } else if (displayText === t("Por favor seleccione su idioma:")) {
            setDisplayText(t("Выберите ваш язык:"));
          } else if (displayText === t("Выберите ваш язык:")) {
            setDisplayText(t("言語を選択してください"));
          } else {
            setDisplayText(t("Select your language:"));
          }
        }, 3000); // Repeat every 5 seconds
    
        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
      }, [displayText, t]); // useEffect dependency on displayText and t

    return(
        <>
            {/* <select className="languageSelect" onChange={(e) => handleChangeLanguage(e.target.value)}>
                    <option value={"en"}>English</option>
                    <option value={"de"}>German</option>
                    <option value={"ru"}>Russian</option>
                    <option value={"es"}>Spanish</option>
                    <option value={"jp"}>Japanese</option>
            </select> */}

            <h3>{displayText}</h3>
            <br></br>

            <div className="languageGrid">
                <div onClick={() => handleChangeLanguage("en")}>
                    <img src={EnFlag} alt="English" />
                    <span>English</span>
                </div>
                <div onClick={() => handleChangeLanguage("de")}>
                    <img src={DeFlag} alt="German" />
                    <span>Deutsch</span>
                </div>
                <div onClick={() => handleChangeLanguage("ru")}>
                    <img src={RuFlag} alt="Russian" />
                    <span>Русский</span>
                </div>
                <div onClick={() => handleChangeLanguage("es")}>
                    <img src={EsFlag} alt="Spanish" />
                    <span>Español</span>
                </div>
                <div onClick={() => handleChangeLanguage("jp")}>
                    <img src={JpFlag} alt="Japanese" />
                    <span>日本語</span>
                </div>

            </div>
        </>
    )
}