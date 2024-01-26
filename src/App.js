import React, { useEffect, useState } from 'react';
import "./App.css"
import axios from 'axios';
import UserInfo from './components/userinfo';
import newColorDataSet from './data/colorvalues';
import Intro from './components/intro';
import ExplanationToUnder1816 from './components/ExplanationToUnder18';
import { useTranslation } from 'react-i18next';
import ParentTutorConsent from './components/tutorparentconsent';
import ExplanationToParentsAndTutor from './components/explanationforparent';
import RealTrial from './components/realTrial';
import Welcome from './components/welcome';


const SurveyComponent = () => {
  const [t, i18n] = useTranslation("global")
  const [tosAccept, setTosAccept] = useState("")

  const [ageGroup, setAgeGroup] = useState('');
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState('ageSelection');
  const [uploadStatus, setUploadStatus] = useState("Uploading results...")


  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("")
  const [visionType, setVisionType] = useState("")
  const [visionSubType, setVisionSubType] = useState("n/a")
  const [results, setResults] = useState({});


 const handleAgeGroupChange = (event) => {
  const selectedAgeGroup = event;
  setAgeGroup(selectedAgeGroup);
  setCurrentPage(selectedAgeGroup === 'Under 18' || selectedAgeGroup === 'Under 16' ? 'introUnder18' : 'introOver18');
  setCurrentPage(
    selectedAgeGroup === "Over 18" ? "introOver18" 
    : 
    selectedAgeGroup === "Under 18" ? "introUnder18"
    : 
    selectedAgeGroup === "Under 16" ? "introUnder16" : "nothing"
  )
};

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function handleTermsCheckboxChange(e){
    setTosAccept(prevTos => prevTos = e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission here
    console.log('Survey results:', { ageGroup, name });
    // Reset form
    setAgeGroup('');
    setName('');
    setCurrentPage('ageSelection');
  };

  const SelectAgeButtons = () => {
    return (
      <div>
      <h2>Select Your Age Group:</h2>
      <form onSubmit={handleSubmit}>

        <button className='ageBtn'
        onClick={() => handleAgeGroupChange('Over 18')}>
          {(t("intro.age_above18"))}
        </button>

        <br></br>

        <button className='ageBtn'
        onClick={() => handleAgeGroupChange('Under 18')}>
          {(t("intro.age_under18"))}
        </button>
        
        <br></br>
          
        <button className='ageBtn'
        onClick={() => handleAgeGroupChange('Under 16')}>
          {(t("intro.age_under16"))}
        </button>

        {/* <br></br><br></br>
        <button class="submit_button" type="submit">Next</button> */}
      </form>
    </div>
    );
  }
  

function handleSubmitOfUserInfo(e) {
  e.preventDefault();
  setName(e.target.elements.name.value);
  setCountry(e.target.elements.country.value);
  setAge(e.target.elements.age.value);
  setNativeLanguage(e.target.elements.language.value)
  setVisionType(e.target.elements.visiontype.value)
  setVisionSubType(e.target.elements.visionsubtype?.value || "n/a");
  setCurrentPage("realTrialPage")
}
  
function handleResultsUpload() {
  axios.post('https://walrus-app-eilu3.ondigitalocean.app/upload-results', {
    name,
    age,
    country,
    nativeLanguage,
    visionType,
    visionSubType,
    results,
  })
    .then(() => {
      console.log('Results uploaded successfully!');
      setUploadStatus(prevUploadStatus => prevUploadStatus = "Thank you for your precious participation!") 
    })
    .catch(error => {
      console.error('Error uploading results:', error.message);
      setUploadStatus(prevUploadStatus => prevUploadStatus = error.message) 

    });
}
function CallBackFinishedTrial(result){
  setCurrentPage("finalPage")
  setResults(result)

}

useEffect(() => {
  if(currentPage === "finalPage"){
    handleResultsUpload()
  }
},[currentPage])


  return (
    <div className='App'>
      <header className='App-header'>
      {currentPage === 'ageSelection' && (
        <>
          
          <Intro
            agebtns={SelectAgeButtons}
          />

        </>
      )}



      {/* start of above 18 */}
      {currentPage === 'introOver18' && (
        
          <>
            <Welcome
              submitClicker={() => {
                if (tosAccept === "yes") {
                  setCurrentPage('nameInput');
                  setTosAccept("");
                } else {
                  console.log(setCurrentPage("declinedPage"))
                }
              }}
              handleTermsCheckboxChange={handleTermsCheckboxChange}
            />
          </>
        
      )}

      {currentPage === 'termsOver18' && (
        <div>
          <button onClick={() => setCurrentPage('infoOver18')}>Next</button>
        </div>
      )}

      {currentPage === 'infoOver18' && (
        <div>
          <button onClick={() => setCurrentPage('nameInput')}>Next</button>
        </div>
      )}
      {/* end of above 18 */}


      {/* start of under 18 */}
      {currentPage === 'introUnder18' && (
        <>
          <ExplanationToUnder1816
              submitClicker={() => {
                if (tosAccept === "yes") {
                  setCurrentPage('termsUnder16');
                } else {
                  console.log(setCurrentPage("declinedPage"))
                }
              }}
              handleTermsCheckboxChange={handleTermsCheckboxChange}
              />
        </>
      )}

      {currentPage === 'termsUnder18' && (
        <div>
          <button onClick={() => setCurrentPage('infoUnder18')}>Next</button>
        </div>
      )}

      {currentPage === 'infoUnder18' && (
        <div>
          <button onClick={() => setCurrentPage('nameInput')}>Next</button>
        </div>
      )}
      {/* end of under 18 */}


    {/* start of under 16 */}
      {currentPage === 'introUnder16' && (
        <>
          <ExplanationToUnder1816
              submitClicker={() => {
                if (tosAccept === "yes") {
                  setCurrentPage('termsUnder16');
                  setTosAccept("");
                } else {
                  console.log(setCurrentPage("declinedPage"))
                }
              }}
              handleTermsCheckboxChange={handleTermsCheckboxChange}
              />
          </>
      )}

      {currentPage === 'termsUnder16' && (
        <div>
          <ParentTutorConsent
            submitClicker={() => setCurrentPage('infoUnder16')}
            />
        </div>
      )}

      {currentPage === 'infoUnder16' && (
        <div>
          <ExplanationToParentsAndTutor
            submitClicker={() => {
              if (tosAccept === "yes") {
                setCurrentPage('nameInput');
                setTosAccept("");
              } else {
                console.log(setCurrentPage("declinedPage"))
              }
            }}
            handleTermsCheckboxChange={handleTermsCheckboxChange}
            />
        </div>
      )}
    {/* end of under 16 */}

    {currentPage === 'nameInput' && (
      <div>
        <UserInfo
          handleSubmit={handleSubmitOfUserInfo}
        />
      </div>
    )}

    {currentPage === 'tutorialPage' && (
      <div>
          <p>This is tutorial Page.</p>
        </div>
      )}

    {currentPage === 'realTrialPage' && (
          <RealTrial
          finishedtrials={CallBackFinishedTrial}
          />
      )}

      {currentPage === 'finalPage' && (
        <div>
          <p style={{fontSize:"25px"}}>{uploadStatus}</p>

        </div>
      )}

      {currentPage === 'declinedPage' && (
        <div>
          <p>ToS has been declined or participant does not want to take the experiment.</p>
        </div>
      )}
      </header>
    </div>
  );
};

export default SurveyComponent;
