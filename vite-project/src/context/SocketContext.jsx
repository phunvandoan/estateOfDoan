import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io(import.meta.env.VITE_SOCKET_PORT));
  }, []);

  useEffect(() => {
    currentUser && socket?.emit("newUser", currentUser.id);
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketContextProvider.propTypes = {
  children: PropTypes.node,
};
