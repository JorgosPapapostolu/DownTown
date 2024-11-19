import * as React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import AngelaFritzen from "./img/Angela_Fritzen.webp";
import AnnaLisaPlettenberg from "./img/Anna_Lisa_Plettenberg.webp";
import AnnaLottaMentzendorff from "./img/Anna_Lotta_Mentzendorff.webp";
import AngsgarPeters from "./img/Ansgar_Peters.webp";
import TeresaKnopp from "./img/teresa_knopp.webp";

const Members = () => {
  return (
    <>
      <Typography component={"div"}>
        <h5>GRUPPENMITGLIEDER</h5>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
          height: "100%",
          width: "100%",
          padding: "2%",
        }}
      >
        <ScrollToBottom>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.default",
              maxHeight: "20vw",
              overflow: "auto",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Angela Fritzen" src={AngelaFritzen} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"div"} sx={{ color: "primary" }}>
                    <h4>Angela Fritzen</h4>
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    color="text.primary"
                  >
                    <h5>
                      Ich schreibe gerade ein Buch über mein Leben. Alle sollen
                      es lesen!
                    </h5>
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Anna Lisa Plettenberg" src={AnnaLisaPlettenberg} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"div"} sx={{ color: "primary" }}>
                    <h4>Anna Lisa Plettenberg"</h4>
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    color="text.primary"
                  >
                    <h5>
                      Ich wünsche mir, dass ich immer die Sterne ansehen kann.
                    </h5>
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Anna Lotta Mentzendorff"
                  src={AnnaLottaMentzendorff}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"div"} sx={{ color: "primary" }}>
                    <h4>Anna Lotta Mentzendorff</h4>
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    color="text.primary"
                  >
                    <h5>
                      Ich liebe Musik von Shakira und Abba. Ich spiele Cello und
                      Flöte und bin Fan von Hannover 96.
                    </h5>
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Ansgar Peters" src={AngsgarPeters} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"div"} sx={{ color: "primary" }}>
                    <h4>Ansgar Peters</h4>
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    color="text.primary"
                  >
                    <h5>Ich fühle mich so jippie!</h5>
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Teresa Knopp" src={TeresaKnopp} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={"div"} sx={{ color: "primary" }}>
                    <h4>Teresa Knopp</h4>
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    color="text.primary"
                  >
                    <h5>Ich bin anders normal.</h5>
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </ScrollToBottom>
      </Paper>
    </>
  );
};

export default Members;
