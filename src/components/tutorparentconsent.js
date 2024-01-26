import { useTranslation } from "react-i18next";

export default function ParentTutorConsent(props) {

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
        </select>

      <h1>{t("parent_tutor_consentUnder18_16.title")}</h1>
      <br></br>
      <h2>{t("parent_tutor_consentUnder18_16.question")}</h2>
      <br></br>
      <p>{t("parent_tutor_consentUnder18_16.paragraph_1")}</p>
      <br></br>

      <br />
      <br />
      <button className="submit_button" onClick={props.submitClicker}>{(t("parent_tutor_consentUnder18_16.submit"))}</button>
      <br></br>
      <span style={{fontSize:"13px", color:"red"}}>{props.information}</span>
      <br></br>
    </div>
  );
}
