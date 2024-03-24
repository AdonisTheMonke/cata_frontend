import { useTranslation } from "react-i18next";

export default function ExplanationToParentsAndTutor(props) {

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

      <h1>{t("experiment_explanation_parent_tutor.title")}</h1>
      <br />

      <h2>{t("experiment_explanation_parent_tutor.point_one")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_one_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_two")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_two_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_three")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_three_description.a")}</p>
      <p>{t("experiment_explanation_parent_tutor.point_three_description.b")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_four")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_four_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_five")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_five_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_six")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_six_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_seven")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_seven_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_eight")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_eight_description")}</p>

      <h2>{t("experiment_explanation_parent_tutor.point_nine")}</h2>
      <p>{t("experiment_explanation_parent_tutor.point_nine_description")}</p>
      <br />

      <p>{t("experiment_explanation_parent_tutor.experimenter")}</p>
      <p>{t("experiment_explanation_parent_tutor.email")}</p>
      <p>{t("experiment_explanation_parent_tutor.principal_investigator")}</p>
      
      <h4>{t("explanationForUnder18_16.understand_question")}</h4>
      <label style={{ fontSize: "15px" }}>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="yes" onChange={props.handleTermsCheckboxChange} /> {t("experiment_explanation_parent_tutor.consent_agree")}
        <br></br>
        <input className="radio-checkbox" type="radio" name="understandquestion" value="maybe" onChange={props.handleTermsCheckboxChange} /> {t("experiment_explanation_parent_tutor.consent_disagree")}
      </label>
      <br />
      <br />
      <button className="submit_button" onClick={props.submitClicker}>{(t("experiment_explanation_parent_tutor.submit"))}</button>
      <br></br>
      <span style={{fontSize:"13px", color:"red"}}>{props.information}</span>
      <br></br>
    </div>
  );
}
