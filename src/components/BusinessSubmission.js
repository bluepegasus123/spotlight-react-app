import React, { useState } from "react"
import "./BusinessSubmission.css"
import logoWhite from "./pictures/ICONWhite.png"

function BusinessSubmission(props) {

    let [submitted, setSubmit] = useState(false);
    let [message, setMessage] = useState("");
    const onClick = async () => {
        const form = document.getElementById('form');
        const name = document.getElementsByClassName("inputOwner");
        const email = document.getElementsByClassName("inputEmail");
        const phone = document.getElementsByClassName("inputPhone");
        const address = document.getElementsByClassName("inputAddress");
        const website = document.getElementsByClassName("inputWebsite");
        const description = document.getElementsByClassName("inputDescription");
        const picture = document.getElementsByClassName("inputPicture");
        if(name && email && phone && address && website && description && picture) {
            await form.submit()
            setSubmit(true)
            if(submitted) {
                setMessage("Thank you for filling the form out!")
            }
        }
        
        form.reset();
    }


    
    return (
        <div className = "Submission">
            <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>
            <iframe
            title="dummyframe"
            name="dummyframe"
            id="dummyframe"
            style={{ display: 'none' }}
          />
          <a href ="/">
            <img class = "whiteLogo" src = {logoWhite} alt = {logoWhite}/>
          </a>
            <h1>Submit your small business information!</h1>
            <form id = "form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScsGod_4mWSR2eswCAUxXvKnl5BHNjgV4Tf5ygCy6VErrz-3w/formResponse" target="dummyframe">
                <label class = "inputLabel">
                    Business Name:
                <input name = "name" class = "inputName" type="text" placeholder="hello" required/>
                </label>
                <br/>

                <label class = "inputLabel">
                    Owner Name:
                <input class = "inputOwner" type="text" placeholder="Owner Name" required/>
                </label>

                <br/>

                <label class = "inputLabel">
                    Owner Email:
                <input class = "inputEmail" type="text" placeholder="Owner Email" required/>
                </label>

                <br/>

                <label class = "inputLabel">
                    Phone Number:
                <input class = "inputPhone" type="text" placeholder="Phone Number" required/>
                </label>

                <br/>

                <label class = "inputLabel">
                    Address:
                <input class = "inputAddress" type="text" placeholder="Address" required/>
                </label>

                <br/>

                <label class = "inputLabel">
                    Website:
                <input class = "inputWebsite" type="text" placeholder="Website" required/>
                </label>

                <br/>
                
                <label class = "inputLabel">
                    Description:
                <input class = "inputDescription" type="text" placeholder="Description" required/>
                </label>

                <br/>

                <label class = "inputLabel">
                    Profile Picture:
                <input class = "inputPicture" type="text" placeholder="Profile Picture" required/>
                </label>
            </form>
            <br/>
            <button class = "formButton" onClick={onClick}>Submit Information</button>
            <h1 class = "outputMessage">{message}</h1>
        </div>
        
            
      );
}

export default BusinessSubmission;