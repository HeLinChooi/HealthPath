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
import { styled, alpha } from "@mui/material/styles";

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
    formData.amount = "0.000001"; //price of product in ETH
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
    <PageLayout>
      <div style={{ padding: "30px" }}>
        <Card sx={{ width: "100%", padding: "0 20px", paddingBottom: "20px" }}>
          <h1>My Cart</h1>
          <div>
            <CartList></CartList>
            <Button
              sx={{ float: "right" }}
              variant="outlined"
              disabled={!currentAccount}
              onClick={handleSubmit}
            >
              Make Payment
            </Button>
          </div>
        </Card>
        <br />
        <div style={{ paddingTop: "20px" }}>
          <Card
            sx={{ width: "100%", padding: "0 20px", paddingBottom: "20px" }}
          >
            {/* <div style={{postition: "relative"}}>
            <StyledChip label="closed" size="small"></StyledChip>
          </div> */}
            <h1>My Wallet</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>{currentBalance ? currentBalance : 0} ETH</h2>
            </div>
            {!currentAccount && (
              <Button
                sx={{ float: "right" }}
                variant="outlined"
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            )}
            <br />
            {currentAccount && (
              <div>
                Connected acc: {currentAccount}
                {/* <br />
                balance: {currentBalance}
                <br />
                Buy sussy medicine from fintern_2 for 0.000001 ETH?
                <br />
                <button onClick={handleSubmit}>Buy</button> */}
              </div>
            )}
          </Card>
        </div>
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
      {[0, 1, 2, 3].map((value) => {
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
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default MyCart;
