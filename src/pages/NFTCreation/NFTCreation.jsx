import React from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const NFTCreation = () => {
  const { currentAccount, sendTransaction, formData } =
    useContext(TransactionContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!currentAccount) return;
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000016"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";
    sendTransaction()
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        navigate("/");
      });
  };

  return (
    <PageLayout>
      <Grid container spacing={2}>
        {!currentAccount && (
          <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
            <Alert severity="error">
              Please connect your Metamask wallet to make payment!
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            textTransform="capitalize"
            sx={{ pt: 1 }}
          >
            {"Create Medical Record NFT"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Form onSubmit={onSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <InfoCard description="The patient has suffered for weeks" /> */}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NFTCreation;
