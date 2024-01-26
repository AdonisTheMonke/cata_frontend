import { useState } from "react"
import { useTranslation } from "react-i18next";

export default function ColorVisionType(){

    const [showExtraOptions, setShowExtraOptions] = useState("")

    const handleChange = (event) => {
        const selectedValue = event.target.value || "n/a";
        setShowExtraOptions(preValue => preValue = selectedValue)
    }

    const [t, i18n] = useTranslation("global");
    

    return(
        <>
            <select id="visiontype" name="visiontype" className="selectorCSS" onChange={handleChange}>
                <option value="common trichromacy">{t("userinfo.vision_type.types.type_1")}</option>   
                <option value="anomalous trichromacy">{t("userinfo.vision_type.types.type_2.type")}</option>   
                <option value="dichromacy">{t("userinfo.vision_type.types.type_3.type")}</option>   
                <option value="unknown">{t("userinfo.vision_type.types.type_4")}</option>   
            </select>

            {showExtraOptions === "anomalous trichromacy" ? (
                    <>
                    <br></br>
                    <p>{t("userinfo.vision_type.types.type_5")}</p>
                    <select className="selectorCSS" id="visionsubtype" name="visionsubtype" >
                        <option value="protanomaly">{t("userinfo.vision_type.types.type_2.sub_type_1")}</option>
                        <option value="deuteranomaly">{t("userinfo.vision_type.types.type_2.sub_type_2")}</option>
                        <option value="tritanomaly">{t("userinfo.vision_type.types.type_2.sub_type_3")} </option>
                    </select>
                    </>
                ) : showExtraOptions === "dichromacy" ? (
                    <>
                    <br></br>
                    <p>{t("userinfo.vision_type.types.type_5")}</p>
                    <select className="selectorCSS" id="visionsubtype" name="visionsubtype" >
                        <option value="protanopia">{t("userinfo.vision_type.types.type_3.sub_type_1")}</option>
                        <option value="deuteranopia">{t("userinfo.vision_type.types.type_3.sub_type_2")}</option>
                        <option value="tritanopia">{t("userinfo.vision_type.types.type_3.sub_type_3")}</option>
                    </select>
                    </>
                ) : null}

              
        </>


    )
}