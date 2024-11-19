import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [registerDataForm, setRegisterDataForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_MAIN_SERVER}/user/register`,
        registerDataForm
      )
      .then((response) => {
        console.log(response.data);
        alert("Registrierung erfolgreich");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.currentTarget;
    setRegisterDataForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registrierung</h2>
        <div>
          <label htmlFor="firstname">Vorname</label>
          <input
            id="firstname"
            type="text"
            required
            value={registerDataForm.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Nachname</label>
          <input
            id="lastname"
            type="text"
            required
            value={registerDataForm.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="birthdate">Geburtstag</label>
          <input
            id="birthdate"
            type="date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={registerDataForm.birthdate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail Adresse</label>
          <input
            id="email"
            type="email"
            required
            value={registerDataForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Passwort</label>
          <input
            id="password"
            type="password"
            required
            value={registerDataForm.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
}
