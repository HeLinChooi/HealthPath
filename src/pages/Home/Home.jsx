import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import TableWithTitle from "@Components/TableWithTitle";
import "./Home.scss";

const Home = () => {
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TableWithTitle title={"NFT Access Log"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableWithTitle title={"My NFTs"} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
