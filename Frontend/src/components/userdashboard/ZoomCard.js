import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Logo from "../userdashboard/img/logo.webp";

//MUI imports
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Der erste Schritt.",
    description: `Du siehst hier drei Schaltflächen/Buttons für die Räume weiter unten.`,
  },
  {
    label: "Wie du den Videochat startest.",
    description: `Klicke auf einen Raum deiner Wahl. Es öffnet sich ein neues Fenster.`,
  },
  {
    label: "Wichtig!",
    description: `Im neuen Fenster oben links deine Kamera und dein Mikro anschalten.`,
  },
  {
    label: "Nimm Rücksicht.",
    description: `Wenn du nicht sprechen möchtest, klicke auf den Button Ton An oder Aus, um dein Mikrofon auszuschalten. Wenn du wieder sprechen möchtest, klicke erneut auf den Button Ton An oder Aus`,
  },
  {
    label: "Du möchtest den Videochat beenden",
    description: `Wenn du fertig
    bist und den Chat beenden möchtest, klicke auf den Button Raum verlassen, um den
    Videochat zu beenden.`,
  },
];

function ZoomCard({ group_uuid }) {
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Typography component={"div"}>
        <h5>VIDEOCHAT</h5>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: "2%",
        }}
      >
        <Stack spacing={2}>
          <Typography component={"div"}>
            <h4>{steps[activeStep].label}</h4>
          </Typography>

          <Stack>{steps[activeStep].description}</Stack>
          <Stack>
            <MobileStepper
              variant="contained"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Nächster Schritt
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Schritt zurück
                </Button>
              }
            />
          </Stack>
        </Stack>

        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "row" }}
          sx={{ marginTop: 4 }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate(`/user/meeting/${group_uuid}/mainroom`);
            }}
          >
            grosser Raum
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate(`/user/meeting/${group_uuid}/partyroom`);
            }}
          >
            Partyraum
          </Button>

          {/* <Button
            variant="contained"
            color="secondary"
            // href={`/userdashboard/${userData.uuid}`}
            onClick={() => {
              navigate(`/user/meeting/${group_uuid}/private/${uuidv4()}`);
            }}
          >
            privater Raum
          </Button> */}
        </Stack>
      </Paper>
    </>
  );
}

export default ZoomCard;
