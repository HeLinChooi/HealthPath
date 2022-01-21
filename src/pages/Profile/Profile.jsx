import React from "react";
import { styled } from "@mui/material/styles";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProfileGridItem = ({ name, value }) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Item>
        {name}
        <br />
        {!!value === value ? (value ? "Yes" : "No") : value}
      </Item>
    </Grid>
  );
};

const Profile = () => {
  const profileInfo = {
    weight: 60,
    height: 152,
    bmi: 25.96,
    bloodType: "A",
    oku: true,
  };
  console.log("Explore");
  return (
    <PageLayout>
      <div>
        <Avatar
          sx={{ mb: 2 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </div>
      <Grid container spacing={2}>
        <ProfileGridItem name="Weight" value={profileInfo.weight} />
        <ProfileGridItem name="Height" value={profileInfo.height} />
        <ProfileGridItem name="BMI" value={profileInfo.bmi} />
        <ProfileGridItem name="Blood Type" value={profileInfo.bloodType} />
        <ProfileGridItem name="OKU" value={profileInfo.oku} />
      </Grid>
    </PageLayout>
  );
};

export default Profile;
