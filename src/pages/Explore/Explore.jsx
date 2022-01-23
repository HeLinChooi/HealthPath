import React from "react";
import PageLayout from "@Components/PageLayout";
import Swiper from "@Components/swiper/Swiper";

const Explore = () => {
  return (
    <PageLayout>
      <div style={{ padding: "30px" }}>
        <h1>Clinics Nearby</h1>
        <Swiper></Swiper>
      </div>
      <div style={{ padding: "30px" }}>
        <h1>Online Pharmacies</h1>
        <Swiper></Swiper>
      </div>
      <div style={{ height: "500px" }}></div>
    </PageLayout>
  );
};

export default Explore;
