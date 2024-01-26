import { useTranslation } from "react-i18next";
import CountryList from "./countrylist";
import NativeLanguage from "./nativelanguage";
import ColorVisionType from "./visiontype";

export default function UserInfo(props){

  const [t, i18n] = useTranslation("global");

    return(
        <div className="userinfodiv">
        <h1>{t("userinfo.title")}</h1>
        <form onSubmit={props.handleSubmit}>
          <label>
            <p>{t("userinfo.email_label")}</p>
            <input className="inputCSS" placeholder={t("userinfo.placeholder")} type="text" name="name" />
          </label>
          <br />
          <label>
            <p>{t("userinfo.gender.label")}</p>
            <select className="selectorCSS" name="gender">
              <option value={"male"}>{t("userinfo.gender.gender_male")}</option>
              <option value={"female"}>{t("userinfo.gender.gender_female")}</option>
              <option value={"other"}>{t("userinfo.gender.gender_other")}</option>
            </select>
          </label>
          <br></br>
          <label>
            <p>{t("userinfo.age_label")}</p>
            <input className="inputCSS" type="number" name="age" required min={1} max={150}/>
          </label>
          <br />
          <label>
            <p>{t("userinfo.country_label")}:</p>
            <CountryList/>
          </label>
          <br />
            <label>
                <p>{t("userinfo.native_language_label")}</p>
                <NativeLanguage/>
            </label>
          <br></br>
            <label>
              <p>{t("userinfo.vision_type.label")}</p>
              <ColorVisionType/>
            </label>
          <br></br><br></br>
          <button className="submit_button" type="submit">{t("userinfo.submit")}</button>
          <br></br>
        </form>
      </div>
    )
}
