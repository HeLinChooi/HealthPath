import React, { useEffect, useState } from "react";
import { deepClone } from "../utils/deepClone";

export const NotificationContext = React.createContext();

export const NotificationProvider = ({ children }) => {
  const mockNotification = [
    {
      creator: "Tung Shin Hospital",
      time: "a few minutes ago",
      title: "An NFT of new medical record was created!",
      read: false,
      url: "/",
      information: {
        imageUrl: "",
        reportUrl: "",
        blockchain: "Ethereum",
        researcher: {
          name: "Cancer",
          time: "",
          researchName: "",
          researcher: "",
        },
      },
    },
    {
      creator: "Tung Shin Hospital",
      time: "a few minutes ago",
      title: "An NFT of new medical record was created!",
      read: false,
      url: "/",
      information: null,
    },
    {
      creator: "Tung Shin Hospital",
      time: "a month ago",
      title: "An NFT of new medical record was created!",
      read: true,
      url: "/",
      information: null,
    },
    {
      creator: "Tung Shin Hospital",
      time: "two months ago",
      title: "An NFT of new medical record was created!",
      read: true,
      url: "/",
      information: null,
    },
  ];
  const [notifications, setNotifications] = useState(mockNotification);

  const addNotification = (newNotification) => {
    setNotifications((prevState) => {
      prevState.unshift(newNotification);
      return deepClone(prevState);
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
