import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "@Components/InfoCard";
import MDBreadcrumbs from "@Components/MDBreadcrumbs";

const Home = () => {
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
          <MDBreadcrumbs
            list={[{ label: "Home", link: "/" }]}
            currentDirectory="NFT"
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            textTransform="capitalize"
            sx={{ pt: 1 }}
          >
            {"Regular Health Check NFT"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard description="The patient has suffered for weeks" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
