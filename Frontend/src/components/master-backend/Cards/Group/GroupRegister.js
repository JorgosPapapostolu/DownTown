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

function GroupRegister() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid item xs={12} sm={3}>
      <Typography>
        <h3>Gruppe anlegen</h3>
      </Typography>
      <form>
        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.default",
            borderColor: "secondary.main",
            display: "flex",
            minHeight: "20vw",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "4%",
          }}
        >
          <Grid container spacing={2}>
            {/* Gruppenname       */}
            <Grid xs={12} sm={12} item>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth
                required
              >
                <InputLabel htmlFor="component-outlined-password">
                  Gruppenname
                </InputLabel>

                <OutlinedInput
                  label="E-Mailadresse"
                  id="component-outlined-password"
                />
              </FormControl>
            </Grid>

            {/* Button      */}
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                required
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

export default GroupRegister;
