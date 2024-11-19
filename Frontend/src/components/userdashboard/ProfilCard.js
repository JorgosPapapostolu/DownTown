import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

import Teresa from "./img/teresa_knopp.webp";

const ProfilCard = () => {
  return (
    <>
      <Typography component={"div"}>
        <h5>DEIN PROFIL</h5>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          borderColor: "secondary.main",
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "2%",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <Avatar
              alt="Teresa Knopp"
              src={Teresa}
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <List>
                <Typography component={"div"}>
                  <h3>Teresa Knopp</h3>
                </Typography>
                <ListItem>
                  <ListItemText
                    primary="Ich bin anders normal."
                    secondary="26 aus Koblenz"
                  />
                </ListItem>
              </List>
              <Button color="secondary" variant="contained">
                ZUM PROFIL
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProfilCard;
