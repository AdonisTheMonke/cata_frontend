import { useTranslation } from "react-i18next";

export default function Welcome(props) {

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

      <h1>{t("TermsAndConditions.title")}</h1>
      <br />

      <h2>{t("TermsAndConditions.point_one")}</h2>
      <p>{t("TermsAndConditions.point_one_description")}</p>

      <h2>{t("TermsAndConditions.point_two")}</h2>
      <p>{t("TermsAndConditions.point_two_description")}</p>

      <h2>{t("TermsAndConditions.point_three")}</h2>
      <p>{t("TermsAndConditions.point_three_description.a")}</p>
      <p>{t("TermsAndConditions.point_three_description.b")}</p>

      <h2>{t("TermsAndConditions.point_four")}</h2>
      <p>{t("TermsAndConditions.point_four_description")}</p>

      <h2>{t("TermsAndConditions.point_five")}</h2>
      <p>{t("TermsAndConditions.point_five_description")}</p>

      <h2>{t("TermsAndConditions.point_six")}</h2>
      <p>{t("TermsAndConditions.point_six_description")}</p>

      <h2>{t("TermsAndConditions.point_seven")}</h2>
      <p>{t("TermsAndConditions.point_seven_description")}</p>

      <h2>{t("TermsAndConditions.point_eight")}</h2>
      <p>{t("TermsAndConditions.point_eight_description")}</p>

      <h2>{t("TermsAndConditions.point_nine")}</h2>
      <p>{t("TermsAndConditions.point_nine_description")}</p>
      <br />

      <p>{t("TermsAndConditions.experimenter")}</p>
      <p>{t("TermsAndConditions.email")}</p>
      <p>{t("TermsAndConditions.principal_investigator")}</p>
      <br />
      
      <h4>{t("TermsAndConditions.consent")}</h4>
      <label style={{ fontSize: "15px" }}>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="yes" onChange={props.handleTermsCheckboxChange} /> {t("TermsAndConditions.consent_agree")}
        <br></br>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="no" onChange={props.handleTermsCheckboxChange} /> {t("TermsAndConditions.consent_disagree")}
      </label>
      <br />
      <br />
      <button className="submit_button" onClick={props.submitClicker}>{(t("TermsAndConditions.submit"))}</button>

      
    </div>
  );
}
