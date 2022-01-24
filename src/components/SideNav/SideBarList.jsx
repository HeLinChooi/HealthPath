import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TokenIcon from "@mui/icons-material/Token";
import { useNavigate } from "react-router";

import { TransactionContext } from "@Pages/context/TransactionContext";
import { useContext } from "react";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { styled, alpha } from "@mui/material/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const SideBarList = ({ toggleDrawer = () => {} }) => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    currentBalance,
  } = useContext(TransactionContext);
  const navigate = useNavigate();

  const StyledChip = styled(Chip)(() =>
    currentAccount
      ? {
          backgroundColor: "limeGreen",
          color: "white",
          fontWeight: "bold",
          float: "right",
        }
      : {
          backgroundColor: "crimson",
          color: "white",
          fontWeight: "bold",
          float: "right",
        }
  );

  const handleSubmit = (e) => {
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000001"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";

    console.log(formData);

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  const goTo = (text) => {
    console.log("go to: " + text);
    if (text == "My Cart") {
      console.log("wallet");
    }
  };

  const navigations = [
    {
      link: "/notification",
      label: "Notification",
      icon: <NotificationsIcon />,
    },
    {
      link: "/nft-creation",
      label: "Create NFT",
      icon: <TokenIcon />,
    },
    {
      link: null,
      label: "Scan QR Code",
      icon: <QrCode2Icon />,
    },
    {
      link: null,
      label: "Prescreening",
      icon: <MedicalServicesIcon />,
    },
    {
      link: "/my-cart",
      label: "My Cart",
      icon: <ShoppingCartIcon />,
    },
    {
      link: null,
      label: "Emergency Call",
      icon: <AddIcCallIcon />,
    },
  ];

  const toTwoDigit = (number) => {
    return number.toFixed(2);
  };

  const shortenString = (str) => {
    return str.slice(0, 18) + "...";
  };

  return (
    <>
      <Box
        sx={{ width: { xs: 250, sm: "auto" } }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div style={{ padding: "10px" }}>
          {/* <Card
          sx={{ width: "100%", margin: "2px", postition: "relative"}}
        > */}
          <StyledChip
            label={currentAccount ? "Connected" : "Disconnected"}
            size="small"
          ></StyledChip>
          {/* <br/> */}
          <p>Your balance:</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ margin: "0" }}>
              {currentBalance ? toTwoDigit(currentBalance) : "0.00"} ETH
            </h2>
          </div>
          {!currentAccount && (
            <Button
              sx={{ width: "100%", marginTop: "15px" }}
              size="small"
              variant="outlined"
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          )}
          <br />
          {currentAccount && (
            <div style={{ color: "lightGray", display: "flex" }}>
              <AccountBalanceIcon size="small" /> &nbsp;&nbsp;
              <span>{shortenString(currentAccount)}</span>
            </div>
          )}
          {/* </Card> */}
        </div>
        <List>
          {navigations.map((navItem, index) => (
            <ListItem
              button
              key={navItem.label}
              onClick={() => {
                if (!navItem.link) return;
                navigate(navItem.link);
              }}
            >
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText primary={navItem.label} />
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
    </>
  );
};

export default SideBarList;
