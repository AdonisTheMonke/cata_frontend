import { useState } from "react"

export default function ColorVisionType(){

    const [showExtraOptions, setShowExtraOptions] = useState("")

    const handleChange = (event) => {
        const selectedValue = event.target.value || "n/a";
        setShowExtraOptions(preValue => preValue = selectedValue)
    }

    return(
        <>
            <select id="visiontype" name="visiontype" className="selectorCSS" onChange={handleChange}>
                <option value="common trichromacy">Common Trichromacy</option>   
                <option value="unknown">Unknown</option>   
                <option value="anomalous trichromacy">Anomalous Trichromacy</option>   
                <option value="dichromacy">Dichromacy</option>   
            </select>

            {showExtraOptions === "anomalous trichromacy" ? (
                    <>
                    <br></br>
                    <p>subtype:</p>
                    <select className="selectorCSS" id="visionsubtype" name="visionsubtype" >
                        <option value="protanomaly">Protanomaly</option>
                        <option value="deuteranomaly">Deuteranomaly</option>
                        <option value="tritanomaly">Tritanomaly </option>
                    </select>
                    </>
                ) : showExtraOptions === "dichromacy" ? (
                    <>
                    <br></br>
                    <p>subtype:</p>
                    <select className="selectorCSS" id="visionsubtype" name="visionsubtype" >
                        <option value="protanopia">Protanopia</option>
                        <option value="deuteranopia">Deuteranopia</option>
                        <option value="tritanopia">Tritanopia</option>
                    </select>
                    </>
                ) : null}

              
        </>


    )
}