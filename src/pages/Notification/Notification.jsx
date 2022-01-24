import React from "react";
import PageLayout from "@Components/PageLayout";
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import theme from "../../theme";
import { NotificationContext } from "../context/NotificationContext";
import CreateAccessNFTModal from "../../components/createAccessNFTModal/createAccessNFTModal";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MenuButtons = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Mark as read</MenuItem>
        <MenuItem onClick={handleClose}>Remove notification</MenuItem>
      </Menu>
    </>
  );
};

const Notification = () => {
  const md = `0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)`;
  const { notifications } = React.useContext(NotificationContext);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PageLayout>
      <CreateAccessNFTModal open={open} handleClose={handleClose} />
      <div style={{ padding: "30px" }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Notification
        </Typography>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "0.75rem",
            boxShadow: md,
            padding: 0,
          }}
        >
          {notifications.map((notification) => (
            <>
              <ListItem
                sx={{
                  py: 2,
                  backgroundColor: notification.read
                    ? theme.palette.grey["100"]
                    : "white",
                  "&:hover": {
                    backgroundColor: theme.palette.grey["100"],
                    cursor: "pointer",
                  },
                }}
                onClick={handleClickOpen}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item xs={10}>
                      <Typography variant="caption" sx={{ color: "gray" }}>
                        {notification.creator} • {notification.time}
                      </Typography>
                      <Typography>{notification.title}</Typography>
                    </Grid>
                    <Grid item align="right" xs={2}>
                      <MenuButtons></MenuButtons>
                    </Grid>
                  </Grid>
                </Box>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </div>
    </PageLayout>
  );
};

export default Notification;
