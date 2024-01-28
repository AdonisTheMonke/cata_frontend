import { useTranslation } from "react-i18next";

export default function TermsAndConditions(props) {

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [t, i18n] = useTranslation("global");


  return (
    <div className='termsandcondition-div'>

        <select className="languageSelect" onChange={(e) => handleChangeLanguage(e.target.value)}>
              <option value={"en"}>English</option>
              <option value={"de"}>German</option>
              <option value={"ru"}>Russian</option>
              <option value={"es"}>Spanish</option>
              <option value={"jp"}>Japanese</option>

        </select>

      <h1>{t("intro.title")}</h1>
      <br />

      <p>{t("intro.paragraph_1")}</p>

      <p>{t("intro.paragraph_2")}</p>

      <br />
      
      <props.agebtns/>
      
    </div>
  );
}
