import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const TemporaryDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Notification", "Scan QR Code", "Presceening", "Emergency Call"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <NotificationsIcon />}
                {index === 1 && <QrCode2Icon />}
                {index === 2 && <MedicalServicesIcon />}
                {index === 3 && <AddIcCallIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Setting", "Helpdesk"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <SettingsIcon />}
              {index === 1 && <LiveHelpIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="show more"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;