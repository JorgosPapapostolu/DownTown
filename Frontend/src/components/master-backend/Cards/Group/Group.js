import Grid from "@mui/material/Unstable_Grid2/Grid2";
import GroupRegister from "./GroupRegister";
import GroupList from "./GroupList";

export default function user() {
  return (
    <Grid container spacing={4}>
      <GroupRegister />
      <GroupList />
    </Grid>
  );
}
