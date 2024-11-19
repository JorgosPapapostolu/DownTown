import Grid from "@mui/material/Unstable_Grid2/Grid2";
import UserRegister from "./UserRegister";
import UserList from "./UserList";

export default function user() {
  return (
    <Grid container spacing={4}>
      <UserRegister />
      <UserList />
    </Grid>
  );
}
