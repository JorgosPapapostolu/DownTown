import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLottie } from "lottie-react";
import groovyAnimation from "./lottie/Nj1PXBNuhm.json";
import Teresa from "./img/teresa_knopp.webp";

//MUI imports
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function UserIntro() {
  const options = {
    animationData: groovyAnimation,
    loop: false,
    height: 10,
  };

  const { View } = useLottie(options);

  const user_name = sessionStorage.getItem("name");
  const user_uuid = sessionStorage.getItem("uuid");
  const user_groups = JSON.parse(sessionStorage.getItem("groups"));

  sessionStorage.setItem("currentGroup", "");

  useEffect(() => {
    sessionStorage.setItem("currentGroup", "");
    sessionStorage.setItem("groupcount", "0");
  }, []);

  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}
      >
        {View}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {user_name && <h1>{`Hallo ${user_name}`}</h1>}
          {/* // den redaktionellen Inhalt gern ändern, erweitern, Medaille einbauen etc. */}
          <Avatar
            alt="Teresa Knopp"
            src={Teresa}
            sx={{ width: 250, height: 250, marginBottom: 2 }}
            variant="rounded"
          />
          <h4>Super! Du bist jetzt eingeloggt. </h4>

          <h4>Gehe zu Deiner Gruppe:</h4>
          {user_groups &&
            user_groups.map((elem) => {
              return (
                <div key={elem.group_uuid}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="secondary"
                    sx={{
                      marginTop: 4,
                    }}
                    href={`/user/dashboard/${user_uuid}`}
                    onClick={(e) => {
                      sessionStorage.setItem(
                        "currentGroup",
                        e.target.textContent
                      );
                    }}
                  >
                    {`${elem.groupname}`}
                  </Button>
                </div>
              );
            })}
        </Box>
      </Box>
    </>
  );
}
