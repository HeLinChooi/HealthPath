import React from "react";
import PageLayout from "@Components/PageLayout";
import Swiper from "@Components/Swiper";
import OnlinePharmacy from "@Components/OnlinePharmacy";

const Explore = () => {
  return (
    <PageLayout title={"Explore"}>
      <div style={{ padding: "30px" }}>
        <h1>Clinics Nearby</h1>
        <Swiper></Swiper>
      </div>
      <div style={{ padding: "30px" }}>
        <h1>Online Pharmacy</h1>
        <OnlinePharmacy></OnlinePharmacy>
      </div>
      <div style={{ height: "100px" }}></div>
    </PageLayout>
  );
};

export default Explore;
