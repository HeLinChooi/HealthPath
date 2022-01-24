import React from "react";
import PageLayout from "@Components/PageLayout";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import { styled, alpha } from "@mui/material/styles";
import panadol from "@Assets/panadol.jpg";
import cough from "@Assets/cough.jpg";
import plaster from "@Assets/hansaplast.jfif";
import { display, height } from "@mui/system";

const MyCart = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    currentBalance,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000016"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";

    console.log(formData);

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  const StyledChip = styled(Chip)(() => ({
    backgroundColor: "crimson",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "5px",
    right: "5px",
  }));

  return (
    <PageLayout title={"My Cart"}>
      <div style={{ padding: "30px" }}>
        {!currentAccount && (
          <Alert sx={{ marginBottom: "20px" }} severity="error">
            Please connect your Metamask wallet to make payment!
          </Alert>
        )}
        <Card sx={{ width: "100%", padding: "0 20px", paddingBottom: "20px" }}>
          <h1>My Cart</h1>
          <div>
            <CartList></CartList>
            <div style={{ float: "right", paddingRight: "12px" }}>
              <b>Total: </b>0.000016 ETH
            </div>
            <br />
            <Button
              sx={{ float: "right", marginTop: "20px" }}
              variant="outlined"
              disabled={!currentAccount}
              onClick={handleSubmit}
            >
              Make Payment
            </Button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export function CartList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{ width: "100%", marginBottom: "20px", bgcolor: "background.paper" }}
    >
      {/* {['16', '20', '13', '07'].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <p style={{float:"right", paddingRight:"50px"}}>0.000{value} ETH</p>
            </ListItemButton>
          </ListItem>
        );
      })} */}

      <ListItem secondaryAction={<Checkbox checked={true} />} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <div style={{ overflow: "hidden", height: "50px", width: "50px" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
                src={panadol}
              />
            </div>
          </ListItemAvatar>
          <ListItemText
            sx={{ paddingLeft: "20px" }}
            primary={`Panadol Extra 65mg Soluble x1`}
          />
          {/* <p>Panadol Extra 65mg Soluble x1</p> */}
          {/* <p style={{paddingRight:"100px"}}>x 1</p> */}
          <p style={{ float: "right", paddingRight: "10px" }}>0.000016 ETH</p>
        </ListItemButton>
      </ListItem>

      <ListItem secondaryAction={<Checkbox checked={false} />} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <div style={{ overflow: "hidden", height: "50px", width: "50px" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
                src={cough}
              />
            </div>
          </ListItemAvatar>
          <ListItemText
            sx={{ paddingLeft: "20px" }}
            primary={`Vicks Cough Syrup Dry  x1`}
          />
          {/* <p>Panadol Extra 65mg Soluble x1</p> */}
          {/* <p style={{paddingRight:"100px"}}>x 1</p> */}
          <p style={{ float: "right", paddingRight: "10px" }}>0.000032 ETH</p>
        </ListItemButton>
      </ListItem>

      <ListItem secondaryAction={<Checkbox checked={false} />} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <div style={{ overflow: "hidden", height: "50px", width: "50px" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt=""
                src={plaster}
              />
            </div>
          </ListItemAvatar>
          <ListItemText
            sx={{ paddingLeft: "20px" }}
            primary={`Hansaplast Kids Plaster x3`}
          />
          {/* <p>Panadol Extra 65mg Soluble x1</p> */}
          {/* <p style={{paddingRight:"100px"}}>x 1</p> */}
          <p style={{ float: "right", paddingRight: "10px" }}>0.000042 ETH</p>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default MyCart;
