import { useEffect, useState } from "react";
import colorStimuliRealSet from "../data/colortones"; // Import the predefined color stimuli set
import { useTranslation } from "react-i18next";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function RealTrial(props) {
    const [t] = useTranslation("global");
    const [stimuli1, setStimuli1] = useState("");
    const [stimuli2, setStimuli2] = useState("");
    const [trials, setTrials] = useState([]);
    const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
    const [results, setResults] = useState({});
    const [isTransitioning, setIsTransitioning] = useState(false); // New state to manage transition

    useEffect(() => {
        // Set trials using the predefined color stimuli set and shuffle them
        const generatedTrials = colorStimuliRealSet.map(tone => ({
            stimuli1: tone.rgb_blocks1,
            stimuli2: tone.rgb_blocks2
        }));
        setTrials(shuffleArray(generatedTrials));
    }, []);

    useEffect(() => {
        if (trials.length > 0 && currentTrialIndex < trials.length) {
            const { stimuli1, stimuli2 } = trials[currentTrialIndex];
            setStimuli1(stimuli1);
            setStimuli2(stimuli2);
        }
    }, [trials, currentTrialIndex]);

    function findColorAndTone(rgb) {
        const toneData = colorStimuliRealSet.find(tone => tone.rgb_blocks1 === rgb || tone.rgb_blocks2 === rgb);
        if (toneData) {
            const color = toneData.rgb_blocks1 === rgb ? toneData.color_blocks1 : toneData.color_blocks2;
            return { color };
        }
        return null;
    }

    function ColorSwitch(colorType) {
        if (isTransitioning) return; // Prevent action if in transition

        const pickedColor = colorType === 'stimuli1' ? stimuli1 : stimuli2;
        const pickedColorData = findColorAndTone(pickedColor);
        const stimuli1Data = findColorAndTone(stimuli1);
        const stimuli2Data = findColorAndTone(stimuli2);

        if (pickedColorData && stimuli1Data && stimuli2Data) {
            const { color } = pickedColorData;
            setResults(prevResults => ({
                ...prevResults,
                [`trial_${currentTrialIndex + 1}`]: {
                    "stimuli_1": stimuli1Data.color,
                    "stimuli_2": stimuli2Data.color,
                    "selected_stimuli": color
                }
            }));
        }

        setIsTransitioning(true); // Set transition state

        setTimeout(() => {
            setCurrentTrialIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(false); // Reset transition state
        }, 1500); // Delay between trials
    }

    const { finishedtrials } = props;

    useEffect(() => {
        // Check if all trials are completed
        if (currentTrialIndex === trials.length && trials.length > 0) {
            // Perform the upload when all trials are completed
            finishedtrials(results);
            console.log(results);
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
    );
}
