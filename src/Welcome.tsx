import { Card, Button, Grid, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Welcome.module.scss";

const Welcome = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: "50vh" }}
      >
        <Grid item xs={12}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} alignItems='center' justifyContent='center'>
          <Card variant='outlined' className={styles.card}>
            <Typography variant='h4' className={styles.header}>
              Leif Social
            </Typography>
            <Button variant='contained' onClick={() => signIn()}>
              Sign In / Sign Up
            </Button>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default Welcome;
