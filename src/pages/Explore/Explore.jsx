import React from "react";
import PageLayout from "@Components/PageLayout";
import Swiper from "@Components/swiper/Swiper";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";

const Explore = () => {
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
    const { addressTo, amount, keyword, message } = formData;

    // const {
    //   addressTo = '0xa48cC8b41b1887Ac2d012751018Db9B495A5887c', //seller acc
    //   amount = 0.00005,//price of product in ETH
    //   keyword = 'test',
    //   message = 'test'
    // } = formData;

    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000001"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";

    console.log(formData);

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <PageLayout>
      <div style={{ padding: "30px" }}>
        <h1>Clinics Nearby</h1>
        <Swiper></Swiper>
      </div>
      <div style={{ padding: "30px" }}>
        <h1>Online Pharmacies</h1>
        <Swiper></Swiper>
      </div>
      <div>
        {!currentAccount && (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
        <br />
        {currentAccount && (
          <div>
            Connected acc: {currentAccount}
            <br />
            balance: {currentBalance}
            <br />
            Buy sussy medicine from fintern_2 for 0.000001 ETH?
            <br />
            <button onClick={handleSubmit}>Buy</button>
          </div>
        )}
      </div>
      <div style={{ height: "500px" }}></div>
    </PageLayout>
  );
};

export default Explore;
