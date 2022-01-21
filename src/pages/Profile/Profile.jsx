import React from "react";
import { styled } from "@mui/material/styles";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
        <span className="profileInfoKey">{name}</span>
        <br />
        <span className="profileInfoValue">
          {!!value === value ? (value ? "Yes" : "No") : value}
        </span>
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

  return (
    <PageLayout>
      <Stack sx={{ mb: 3 }} alignItems="center" spacing={1}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <span>User 1</span>
      </Stack>

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
