import { createContext, useEffect } from "react";
import { useNotification } from "./NotificationContext";

// This file is strictly to fulfill three different HTTP methods.
// If I were to implement a scheduled deletion, I would place it in the backend to ensure the highscores are deleted 
// regardless of whether users are active on the site.

const MidnightTaskContext = createContext();

export const MidnightTaskProvider = ({ children }) => {
  const showNotification = useNotification();

  useEffect(() => {
    const deleteHighscores = async () => {
      try {
        const response = await fetch("/api/highscores", { method: "DELETE" });
        if (!response.ok) {
          throw new Error("Failed to delete highscores");
        }
        showNotification("Highscores deleted successfully.", "success");
      } catch (error) {
        showNotification("Error deleting highscores.", "error");
      }
    };

    const scheduleMidnightTask = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0
      );
      const timeUntilMidnight = nextMidnight - now;

      // Schedule task for midnight
      setTimeout(() => {
        deleteHighscores();
        setInterval(deleteHighscores, 24 * 60 * 60 * 1000);
      }, timeUntilMidnight);
    };

    scheduleMidnightTask();
  }, []);

  return (
    <MidnightTaskContext.Provider value={{}}>
      {children}
    </MidnightTaskContext.Provider>
  );
};
