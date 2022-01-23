import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import TableWithTitle from "@Components/TableWithTitle";
import MDNFTList from "@Components/MDNFTList";
import "./Home.scss";
import nftAccessLog from "@Mock/nftAccessLog";
const Home = () => {
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MDNFTList title="NFT Access Log" list={nftAccessLog} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
