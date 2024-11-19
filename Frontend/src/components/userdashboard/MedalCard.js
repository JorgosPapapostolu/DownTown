// MUI imports
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

// App imports
import StammtischMedailleEins from "./img/stammtisch_medaille_01.webp";
import StammtischMedailleZwei from "./img/stammtisch_medaille_02.webp";
import StammtischMedailleDrei from "./img/stammtisch_medaille_03.webp";
import StammtischMedailleVier from "./img/stammtisch_medaille_04.webp";
import FreundschaftsPokalEins from "./img/freundschafts_pokale_01.webp";
import FreundschaftsPokalZwei from "./img/freundschafts_pokale_02.webp";
import FreundschaftsPokalDrei from "./img/freundschafts_pokale_03.webp";
import FreundschaftsPokalVier from "./img/freundschafts_pokale_04.webp";

const MedalCard = () => {
  return (
    <>
      <Typography component={"div"}>
        <h5>DEINE MEDAILLEN</h5>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: "2%",
        }}
      >
        <Typography component={"div"}>
          <h6>STAMMTISCH-MEDAILLEN</h6>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: 2,
          }}
        >
          <Box>
            <img
              alt="Fünf Stammtische-Medaille"
              src={StammtischMedailleEins}
              height={70}
            />
          </Box>
          <Box>
            <img
              alt="Zehn Stammtische-Medaille"
              src={StammtischMedailleZwei}
              height={70}
            />
          </Box>
          <Box>
            <img
              alt="Fünfzehn Stammtische-Medaille"
              src={StammtischMedailleDrei}
              height={70}
            />
          </Box>
          <Box>
            <img
              alt="Zwanzig Stammtische-Medaille"
              src={StammtischMedailleVier}
              height={70}
            />
          </Box>
        </Box>
        <Box>
          <Typography component={"div"} sx={{ marginTop: 4 }}>
            <h6>FREUNDSCHAFTS-POKALE</h6>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginTop: 2,
            }}
          >
            <Box>
              <img
                alt="Zehn Freunde"
                src={FreundschaftsPokalEins}
                height={70}
              />
            </Box>
            <Box>
              <img
                alt="Zwanzig Freunde"
                src={FreundschaftsPokalZwei}
                height={70}
              />
            </Box>
            <Box>
              <img
                alt="Dreizig Freunde"
                src={FreundschaftsPokalDrei}
                height={70}
              />
            </Box>
            <Box>
              <img
                alt="Vierzig Freunde"
                src={FreundschaftsPokalVier}
                height={70}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default MedalCard;
