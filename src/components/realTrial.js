import { useEffect, useState } from "react";
import newColorDataSet from "../data/colorvalues";
import { useTranslation } from "react-i18next";

export default function RealTrial(props) {
    const [t] = useTranslation("global");
    const [stimuli1, setStimuli1] = useState("");
    const [stimuli2, setStimuli2] = useState("");
    const [trials, setTrials] = useState([]);
    const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
    const [results, setResults] = useState({});

    useEffect(() => {
        const generatedTrials = [];
        const colorDataSetCopy = [...newColorDataSet]; // Make a copy to avoid modifying the original array

        for (let i = 0; i < 4; i++) { // Adjust the number of trials as needed
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

    function findColorAndTone(rgb) {
        const colorData = newColorDataSet.find(colorData =>
            Object.values(colorData.tones).includes(rgb)
        );
        if (colorData) {
            const color = colorData.color;
            const tone = Object.keys(colorData.tones).find(
                key => colorData.tones[key] === rgb
            );
            return { color, tone };
        }
        return null;
    }

    function ColorSwitch(colorType) {
        const pickedColor = colorType === 'stimuli1' ? stimuli1 : stimuli2;
        const pickedColorData = findColorAndTone(pickedColor);
        const stimuli1Data = findColorAndTone(stimuli1);
        const stimuli2Data = findColorAndTone(stimuli2);

        if (pickedColorData && stimuli1Data && stimuli2Data) {
            const { color, tone } = pickedColorData;
            setResults(prevResults => ({
                ...prevResults,
                [`trial_${currentTrialIndex + 1}`]: {
                    "stimuli_1": `${stimuli1Data.tone} ${stimuli1Data.color}`,
                    "stimuli_2": `${stimuli2Data.tone} ${stimuli2Data.color}`,
                    "selected_stimuli": `${tone} ${color}`,
                }
            }));
        }

        setStimuli1("");
        setStimuli2("");

        setTimeout(() => {
            setCurrentTrialIndex((prevIndex) => prevIndex + 1);
        }, 1500); /* Speed of transition between Stimuli, 1500ms */
    }

    const { finishedtrials } = props;

    useEffect(() => {
        // Check if all trials are completed
        if (currentTrialIndex === trials.length && trials.length > 0) {
            // Perform the upload when all trials are completed
            finishedtrials(results)
            console.log(results)
        }
    }, [currentTrialIndex, trials, finishedtrials, results]);

    return (
        <>
            <div className='trialdiv'>
                <p style={{ fontSize: "20px" }}>{t("tutorial.question")}</p>
                <p style={{ fontSize: "16px" }}>{t("tutorial.click_instruction")}</p>
                <br></br>
                <div className='colorSelectionGrid'>
                    <div onClick={() => ColorSwitch('stimuli1')} className="color1" style={{ backgroundColor: stimuli1 }}></div>
                    <div onClick={() => ColorSwitch('stimuli2')} className="color2" style={{ backgroundColor: stimuli2 }}></div>
                </div>
                <br></br>
                <p>{currentTrialIndex + 1} / {trials.length}</p>
            </div>
        </>
    )
}
