import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { instagram } from "react-icons-kit/icomoon/instagram";

import "./Footer.css";

export default function Footer() {
  const [completeName, setCompleteName] = useState("");
  const [email, setEmail] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const updateName = (e) => {
    var nameregex = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
    setCompleteName(e.target.value);
    if (nameregex.test(completeName)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const updateEmail = (e) => {
    var emailregex = /^([a-zA-Z0-9_\-.]{3,})@((\[[0-9]{3,}\.[0-9]{3,}\.[0-9]{3,}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,})(\]?)/;
    setEmail(e.target.value);
    if (emailregex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <div className="FooterContainer">
      <div className="schedule">
        <h2>HORAIRES</h2>
        <p>Lundi-Vendredi: 9:00 A.M. a 5:00 P.M.</p>
        <p>Samedi: 10:00 A.M. a 5:00 P.M.</p>
      </div>
      <div className="follow">
        <h2>SUIVEZ-NOUS</h2>
        <div className="iconcontainer">
          <Icon icon={facebook}></Icon>
          <Icon icon={instagram}></Icon>
        </div>

        <form action="mail.php" method="POST">
          <label name="name" id="namelabel">
            nom complet:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={completeName}
            onChange={updateName}
          />
          <label name="lastname">courriel:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
          {nameValid && emailValid && (
            <button type="submit" name="submit" value="send">
              Soumettre
            </button>
          )}
        </form>
      </div>
      <div className="phone">
        <h2>APPELEZ-NOUS</h2>
        <div className="tel">
          Tel:
          <p className="phonecolor">0 123 456 7890</p>
        </div>
      </div>
    </div>
  );
}
