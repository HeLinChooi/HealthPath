import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import TableWithTitle from "@Components/TableWithTitle";
import "./Home.scss";

const Home = () => {
  return (
    <PageLayout>
      <TableWithTitle title={"NFT Access Log"} />
    </PageLayout>
  );
};

export default Home;
