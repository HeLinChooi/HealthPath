import React from "react";
import PageLayout from "@Components/PageLayout";
import Swiper from "@Components/Swiper";
import OnlinePharmacy from "@Components/OnlinePharmacy";
import { Divider, Typography } from "@mui/material";

const Explore = () => {
  return (
    <PageLayout title={"Explore"}>
      <div style={{ paddingBottom: "25px" }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Clinics Nearby
        </Typography>
        <Swiper></Swiper>
      </div>
      <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Online Pharmacy
        </Typography>
        <OnlinePharmacy></OnlinePharmacy>
      </div>
      <div style={{ height: "100px" }}></div>
    </PageLayout>
  );
};

export default Explore;
