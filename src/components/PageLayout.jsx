import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Header from "@Components/Header";
import ClippedDrawer from "@Components/SideNav/ClippedDrawer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PageLayout = ({ children }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
  if (isMdUp) {
    return <ClippedDrawer>{children}</ClippedDrawer>;
  }
  return (
    <>
      <Header />
      <div
        style={{
          padding: "10px",
          paddingBottom: "67px",
          // margin: "10px",
          // marginBottom: "67px",
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
