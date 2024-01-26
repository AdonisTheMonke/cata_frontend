import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TutorialTrials(props) {
  const [currentTutorialIndex, setCurrentTutorialIndex] = useState(0);
  const [isVisible, setIsVisible] = useState("instructions");

  const [t, i18n] = useTranslation("global");

  const tutorialStimuli = [
    {
      stimuli1: "#795c1b",
      stimuli2: "#bc1933"
    },
    {
      stimuli1: "#66282f",
      stimuli2: "#d8b76f"
    }
  ];

  const handleClick = () => {
    setIsVisible("tutorial");
  };


  function handleNextTutorialItem() {
    if (currentTutorialIndex < tutorialStimuli.length - 1) {
      setCurrentTutorialIndex(prevIndex => prevIndex + 1);
    } else {
      setIsVisible("congratsTutorial"); 
    }
  }

  return (
    <div className="trialdiv">
      <br />
      {isVisible === "instructions" && (
        <div style={{ width: "400px", textAlign: "center" }}>
          <h3>{t("tutorial.title")}</h3>
          <p style={{ fontSize: "19px", textAlign: "center" }}>{t("tutorial.paragraph_1")}</p>
          <br />
          <button className="submit_button" onClick={handleClick}>{t("tutorial.submit")}</button>
        </div>
      )}
      {isVisible === "tutorial" && (
        <>
          <p style={{fontSize:"20px"}}>{t("tutorial.question")}</p>
          <p style={{ fontSize: "16px" }}>{t("tutorial.click_instruction")}</p>
          <br />
          <div className="colorSelectionGrid">
            <div onClick={handleNextTutorialItem} className="color1" style={{ backgroundColor: tutorialStimuli[currentTutorialIndex].stimuli1 }}></div>
            <div onClick={handleNextTutorialItem} className="color2" style={{ backgroundColor: tutorialStimuli[currentTutorialIndex].stimuli2 }}></div>
          </div>
          <br />
          <p>{currentTutorialIndex + 1} / {tutorialStimuli.length}</p>
        </>
      )}

      {isVisible === "congratsTutorial" && (
          <div style={{textAlign:"center", width:"300px"}}>
            <h3>{t("tutorial.completion_title")}</h3>
            <p style={{fontSize:"19px"}}>{t("tutorial.completion_paragraph")}</p>
            <br></br>
            <button className="submit_button" onClick={props.finishedTutorial}>{t("tutorial.completion_button")}</button>
          </div>
      )}
    </div>
  );
}
