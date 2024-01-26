import CountryList from "./countrylist";
import NativeLanguage from "./nativelanguage";
import ColorVisionType from "./visiontype";

export default function UserInfo(props){
    return(
        <div className="userinfodiv">
        <h1>Participant Information</h1>
        <form onSubmit={props.handleSubmit}>
          <label>
            <p>Email (optional: if you are interested to know your result, we may send it to your email address):</p>
            <input className="inputCSS" placeholder="Enter email address" type="text" name="name" />
          </label>
          <br />
          <label>
            <p>Gender:</p>
            <select className="selectorCSS" name="gender">
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </select>
          </label>
          <br></br>
          <label>
            <p>Age (Required):</p>
            <input className="inputCSS" type="number" name="age" required min={1} max={150}/>
          </label>
          <br />
          <label>
            <p>Country (Required):</p>
            <CountryList/>
          </label>
          <br />
            <label>
                <p>Native Language (Requiered):</p>
                <NativeLanguage/>
            </label>
          <br></br>
            <label>
              <p>Vision Type (Requiered):</p>
              <ColorVisionType/>
            </label>
          <br></br><br></br>
          <button className="submit_button" type="submit">Submit</button>
        </form>
      </div>
    )
}
