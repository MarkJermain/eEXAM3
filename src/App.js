import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emailAddress, setEmailAddress] = useState(null);
  const [isValid, setValidity] = useState(null);

  const validate = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailAddress)) {
      document.getElementById("Color").style.color = "Green";
      setValidity("Email is Valid");
    } else if (!regEx.test(emailAddress)) {
      document.getElementById("Color").style.color = "Red";
      setValidity("Email is Invalid");
    }
  };

  return (
    <div className="App">
      <h1>Exam #3</h1>
      <h2>Let's validate your email address!</h2>
      <div style={{ padding: 10 }}>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        ></input>
      </div>
      <div style={{ padding: 10 }}>
        <button onClick={validate}>VALIDATE</button>
      </div>
      <div>
        <h4>
          <span id="Color" style={{ fontWeight: 600 }}>
            {isValid}
          </span>
        </h4>
      </div>
    </div>
  );
}
