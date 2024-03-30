import { useEffect, useState } from "react";
import newColorDataSet from "../data/colorvalues";
import { useTranslation } from "react-i18next";



export default function RealTrial(props){


   const [t] = useTranslation("global");

    const [stimuli1, setStimuli1] = useState("");
    const [stimuli2, setStimuli2] = useState("");
    const [trials, setTrials] = useState([]);
    const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
    const [results, setResults] = useState({});
  
    
  
  useEffect(() => {
  
    const generatedTrials = [];
    const colorDataSetCopy = [...newColorDataSet]; // Make a copy to avoid modifying the original array
  
    for (let i = 0; i < 70; i++) { // Adjust the number of trials as needed
      const randomIndex1 = Math.floor(Math.random() * colorDataSetCopy.length);
      let randomIndex2 = Math.floor(Math.random() * (colorDataSetCopy.length - 1));
  
      if (randomIndex2 >= randomIndex1) {
        randomIndex2++;
      }
  
      const color1 = colorDataSetCopy[randomIndex1];
      const color2 = colorDataSetCopy[randomIndex2];
  
      const tones1 = Object.values(color1.tones);
      const tones2 = Object.values(color2.tones);
  
      const randomTone1 = tones1[Math.floor(Math.random() * tones1.length)];
      const randomTone2 = tones2[Math.floor(Math.random() * tones2.length)];
  
      const trial = { stimuli1: randomTone1, stimuli2: randomTone2 };
  
      // Check if the trial already exists in generatedTrials
      const isDuplicate = generatedTrials.some(
        existingTrial =>
          existingTrial.stimuli1 === trial.stimuli1 &&
          existingTrial.stimuli2 === trial.stimuli2
      );
  
      // If it's a duplicate, regenerate the trial
      if (isDuplicate) {
        i--; // Decrement i to repeat the current iteration
      } else {
        generatedTrials.push(trial);
      }
    }
  
    setTrials(generatedTrials);
    console.log(generatedTrials)
  }, []);
  
  
    useEffect(() => {
      if (trials.length > 0 && currentTrialIndex < trials.length) {
        const { stimuli1, stimuli2 } = trials[currentTrialIndex];
        setStimuli1(stimuli1);
        setStimuli2(stimuli2);
      }
    }, [trials, currentTrialIndex]);
  
  
    function ColorSwitch() {
      const pickedColor = currentTrialIndex < trials.length ? stimuli1 : null;
      
      const pickedColorData = newColorDataSet.find(colorData =>
        Object.values(colorData.tones).includes(pickedColor)
      );
      
      if (pickedColorData) {
        const color = pickedColorData.color;
        const tone = Object.keys(pickedColorData.tones).find(
          key => pickedColorData.tones[key] === pickedColor
        );
        const rgb = pickedColor;
      
        setResults(prevResults => ({
          ...prevResults,
          [`trial_${currentTrialIndex + 1}`]: {
            color,
            tone,
            rgb
          }
        }));
      }
      
      //setCurrentTrialIndex(prevIndex => prevIndex + 1);
      setStimuli1("");
      setStimuli2("");
    
      setTimeout(() => {
        setCurrentTrialIndex((prevIndex) => prevIndex + 1);
      }, 3000); /* Speed of transition between Stimuli, 500ms */
    }


    const { finishedtrials } = props;

    useEffect(() => {
      // Check if all trials are completed
      if (currentTrialIndex === trials.length && trials.length > 0) {
        // Perform the upload when all trials are completed
        finishedtrials(results)

      }
    }, [currentTrialIndex, trials, finishedtrials, results]);
  
  

    return(
        <>
        <div className='trialdiv'>
              <p style={{ fontSize: "20px" }}>{t("tutorial.question")}</p>
              <p style={{ fontSize: "16px" }}>{t("tutorial.click_instruction")}</p>
              <br></br>
              <div className='colorSelectionGrid'>
                <div onClick={ColorSwitch} className="color1" style={{ backgroundColor: stimuli1 }}></div>
                <div onClick={ColorSwitch} className="color2" style={{ backgroundColor: stimuli2 }}></div>
              </div>
              <br></br>
              <p>{currentTrialIndex + 1} / {trials.length}</p>
        </div>

        </>
    )
}