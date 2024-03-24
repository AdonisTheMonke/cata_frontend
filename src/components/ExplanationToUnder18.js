import { useTranslation } from "react-i18next";

export default function ExplanationToUnder1816(props) {

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [t, i18n] = useTranslation("global");


  return (
    <div className='termsandcondition-div'>

        {/* <select className="languageSelect" onChange={(e) => handleChangeLanguage(e.target.value)}>
              <option value={"en"}>English</option>
              <option value={"de"}>German</option>
              <option value={"ru"}>Russian</option>
              <option value={"es"}>Spanish</option>
              <option value={"jp"}>Japanese</option>
        </select> */}

      <h1>{t("explanationForUnder18_16.title")}</h1>
      <br />
      <h2>{t("explanationForUnder18_16.question")}</h2>
      <p>{t("explanationForUnder18_16.paragraph_1")}</p>

      <br />
      

      <h4>{t("explanationForUnder18_16.understand_question")}</h4>
      <label className="checkbox-container" style={{ fontSize: "15px" }}>
        <input className="radio-checkbox"  type="radio" name="understandquestion" value="yes" onChange={props.handleTermsCheckboxChange} /> <span className="checkbox-label">{t("explanationForUnder18_16.understand_totally_totally")}</span>
        <br></br>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="maybe" onChange={props.handleTermsCheckboxChange} /> <span className="checkbox-label">{t("explanationForUnder18_16.understand_question_justlittle")}</span> 
        <br></br>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="no" onChange={props.handleTermsCheckboxChange} /> <span className="checkbox-label">{t("explanationForUnder18_16.understand_question_no")}</span> 
      </label>
      <br />
      <br />
      <button className="submit_button" onClick={props.submitClicker}>{(t("TermsAndConditions.submit"))}</button>
      <br></br>
      <span style={{fontSize:"13px", color:"red"}}>{props.information}</span>
      <br></br>
    </div>
  );
}
