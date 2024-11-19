import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext, useState, useEffect } from "react";
import { ColorModeContext } from "./store";
import { FontSizeContext } from "./store/FontSize";
import { useAuth } from "./components/login/auth";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

export default function AppMenu() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const { toggleFontsize } = useContext(FontSizeContext);
  const { isAuthenticated, logout } = useAuth();

  const [showButton, setShowButton] = useState(false);
  const [groupCountState, setGroupCountState] = useState(
    parseInt(sessionStorage.getItem("groupcount"))
  ); // Konvertiert in Nummer

  const handleLogout = () => {
    logout();
    sessionStorage.setItem("currentGroup", "");
    sessionStorage.setItem("groupcount", "0");
    setGroupCountState(0); // Update state
  };

  const currentGroup = sessionStorage.getItem("currentGroup");
  const user_uuid = sessionStorage.getItem("uuid");

  useEffect(() => {
    setGroupCountState(parseInt(sessionStorage.getItem("groupcount"))); // Update state wenn groupcount sich verändert
  }, []);

  useEffect(() => {
    setShowButton(groupCountState > 1);
  }, [groupCountState]);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          padding: { xs: "2%", md: "0.5%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center" },
          bgcolor: "background.default",
        }}
      >
        <Box>
          <Typography component="div">
            {currentGroup && <h5>{`${currentGroup}`}</h5>}
            {showButton && (
              <Button
                color="secondary"
                size="small"
                href={`/user/${user_uuid}`}
              >
                Gruppe wechseln
              </Button>
            )}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ paddingRight: 1 }} component={"div"}>
            <h5>SCHRIFT VERGRÖßERN</h5>
          </Typography>
          <Button
            value="14"
            style={{ fontSize: "18px" }}
            onClick={(event) => {
              toggleFontsize(event);
            }}
            color="secondary"
          >
            A
          </Button>
          <Button
            value="20"
            style={{ fontSize: "24px" }}
            onClick={(event) => {
              toggleFontsize(event);
            }}
            color="secondary"
          >
            A
          </Button>
          <Button
            value="26"
            style={{ fontSize: "32px" }}
            onClick={(event) => {
              console.log(event);
              toggleFontsize(event);
            }}
            color="secondary"
          >
            A
          </Button>
        </Box>

        <Box>
          <Typography component="div">
            <Button
              onClick={toggleMode}
              color="secondary"
              size="medium"
              sx={{ marginRight: 4 }}
            >
              Hell/Dunkel wechseln
            </Button>
          </Typography>

          {isAuthenticated && (
            <Button
              onClick={handleLogout}
              color="secondary"
              variant="outlined"
              className="navbar-user-button"
              href="/login"
            >
              Abmelden
            </Button>
          )}
        </Box>
      </AppBar>
    </>
  );
}
