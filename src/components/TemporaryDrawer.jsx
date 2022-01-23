import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";

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

  const goTo = (text) => {
    console.log("go to: " + text);
    if (text == "My Cart") {
      console.log("wallet");
    }
  };

  const valueMap = [
    "/notificatioon",
    "/qr-code",
    "/prescreening",
    "/my-cart",
    "/emergency-call",
  ];
  const navigate = useNavigate();

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Notification",
          "Scan QR Code",
          "Prescreening",
          "My Cart",
          "Emergency Call",
        ].map((text, index) => (
          <ListItem button key={text} onClick={() => navigate(valueMap[index])}>
            <ListItemIcon>
              {index === 0 && <NotificationsIcon />}
              {index === 1 && <QrCode2Icon />}
              {index === 2 && <MedicalServicesIcon />}
              {index === 3 && <ShoppingCartIcon />}
              {index === 4 && <AddIcCallIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Helpdesk", "Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <LiveHelpIcon />}
              {index === 1 && <SettingsIcon />}
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
