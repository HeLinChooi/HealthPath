import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Header from "@Components/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          padding: "10px",
          paddingBottom: "67px",
          height: "calc(100% - 56px)",
        }}
      >
        {children}
      </div>
      <BottomNavigation />
    </>
  );
};

export default PageLayout;
