import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Header from "@Components/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ padding: "10px", paddingBottom: "67px" }}>{children}</div>
      <BottomNavigation />
    </>
  );
};

export default PageLayout;
