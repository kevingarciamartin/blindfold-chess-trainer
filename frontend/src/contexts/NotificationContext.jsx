import { createContext, useState, useContext } from "react";
import Notification from "../components/Notification/Notification";

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type, duration = 3000) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
        ></Notification>
      )}
    </NotificationContext.Provider>
  );
};
