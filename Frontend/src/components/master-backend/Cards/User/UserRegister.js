import * as React from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function UserRegister() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid item xs={12} sm={4}>
      <Typography>
        <h3>BENUTZER ANLEGEN</h3>
      </Typography>
      <form>
        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.default",
            borderColor: "secondary.main",
            display: "flex",
            minHeight: "30vw",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "4%",
          }}
        >
          <Grid container spacing={2}>
            {/* Vorname       */}
            <Grid xs={12} sm={6} item>
              <FormControl variant="outlined" color="secondary">
                <InputLabel htmlFor="component-outlined-password">
                  Vorname
                </InputLabel>

                <OutlinedInput
                  label="Vorname"
                  id="component-outlined-password"
                />
              </FormControl>
            </Grid>
            {/* Nachname       */}
            <Grid xs={12} sm={6} item>
              <FormControl variant="outlined" color="secondary">
                <InputLabel htmlFor="component-outlined-password">
                  Nachname
                </InputLabel>

                <OutlinedInput
                  label="Nachname"
                  id="component-outlined-password"
                />
              </FormControl>
            </Grid>
            {/* Geburtsdatum       */}
            <Grid xs={12} sm={6} item>
              <FormControl variant="outlined" color="secondary">
                <InputLabel htmlFor="component-outlined-password">
                  Geburtsdatum
                </InputLabel>

                <OutlinedInput
                  label="Geburtsdatum"
                  id="component-outlined-password"
                />
              </FormControl>
            </Grid>
            {/* E-Mailadresse      */}
            <Grid xs={12} sm={12} item>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth
                required
              >
                <InputLabel htmlFor="component-outlined-password">
                  E-Mailadresse
                </InputLabel>

                <OutlinedInput
                  label="E-Mailadresse"
                  id="component-outlined-password"
                />
              </FormControl>
            </Grid>
            {/* Passwort      */}
            <Grid xs={12} sm={12} item>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth
                required
              >
                <InputLabel htmlFor="component-outlined-password">
                  Passwort
                </InputLabel>

                <OutlinedInput
                  label="Passwort"
                  id="component-outlined-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            {/* Button      */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Anlegen
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
}

export default UserRegister;
