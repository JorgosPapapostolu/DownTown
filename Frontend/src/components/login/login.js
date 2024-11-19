import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login({ userData, setUserData }) {
  const [loginDataForm, setloginDataForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [pwError, setPwError] = useState(false);

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    sessionStorage.setItem("currentGroup", "");
    sessionStorage.setItem("groupcount", "0");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axios
      .post(`${process.env.REACT_APP_MAIN_SERVER}/user/login`, loginDataForm)
      .then((response) => {
        const data = response.data;
        console.log(response);
        setIsAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", "true");
        setUserData(data);

        //store client information
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("uuid", data.uuid);
        sessionStorage.setItem("groups", JSON.stringify(data.groups));
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("groupcount", "1");
        // is it safe to store the token? probably not!!! And do we need it anyways from now on? I dunno.
        setLoading(false);
        navigate(`/user/${data.uuid}`);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 400) {
          console.log("wrong password");
          setPwError(true);
          setOpen(true);
        } else {
          alert("Error 500: Ein Problem mit dem Server ist aufgetreten.");
        }

        // Where does this modal need to go? It should appear when the authentication was not successful
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.currentTarget;
    setloginDataForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4%",
        }}
      >
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
          }}
        >
          <form className="login-form" onSubmit={handleSubmit}>
            <Typography component="div">
              <h2>Melde dich an!</h2>
            </Typography>
            <Typography
              component="div"
              sx={{
                marginTop: 2,
              }}
            >
              <h3>Schritt 1: </h3>
              <p>
                Gib deine Daten ein. Dazu gehören deine E-Mail-Adresse und ein
                Passwort. Fülle alle Felder aus und achte darauf, dass du die
                richtigen Informationen eingibst.
              </p>
              <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
              <h3>Schritt 2: </h3>
              <p>Klicke auf den Button "Anmelden"</p>
            </Typography>

            <TextField
              htmlFor="email"
              color="secondary"
              fullWidth
              label="E-Mailadresse eingeben"
              type="email"
              id="email"
              required
              value={loginDataForm.email}
              onChange={handleInputChange}
              sx={{ marginTop: 5 }}
            >
              E-Mailadresse
            </TextField>

            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              required
              label="Passwort eingeben"
              id="password"
              type="password"
              value={loginDataForm.password}
              onChange={handleInputChange}
              sx={{
                marginTop: 3,
              }}
            >
              Passwort
            </TextField>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                marginTop: 2,
              }}
            >
              Anmelden
            </Button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              textAlign: "center",
            }}
          >
            {loading && <CircularProgress color="secondary" />}
            <Modal
              style={{
                border: "2px solid #000",
                boxShadow: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "40%",
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Hoppla!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Deine Eingaben waren falsch. <br></br>Hast Du Mailadresse und
                  Passwort richtig eingetippt? Probiere es nochmal!
                </Typography>
              </Box>
            </Modal>
          </div>
        </Box>
      </Box>
    </>
  );
}
