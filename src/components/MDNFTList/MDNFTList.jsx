import React from "react";
import MDListItem from "./MDListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const md = `0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)`;

const MDNFTList = ({ title, list = [1, 2, 3] }) => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 1 }}
      >
        <Grid sx={{ fontWeight: "bold" }}>{title}</Grid>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="body2">View More</Typography>
        </Link>
      </Grid>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "0.75rem",
          boxShadow: md,
          padding: 0,
        }}
      >
        {list.map((item, idx) => {
          const { title, date, reason, accessorName } = item;
          return (
            <>
              <MDListItem
                title={title}
                date={date}
                reason={reason}
                accessorName={accessorName}
              />
              {idx !== list.length - 1 && <Divider />}
            </>
          );
        })}
      </List>
    </>
  );
};

export default MDNFTList;
