import { Card, Button, Grid, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Welcome.module.scss";

const Welcome = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card variant='outlined' className={styles.card}>
            <Typography>Leif Social</Typography>
            <Button variant='contained' onClick={() => signIn()}>
              Sign In
            </Button>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default Welcome;
