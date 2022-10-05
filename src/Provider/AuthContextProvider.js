import * as React from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    // Logic to handle login
    setToken(true);
  };

  const handleLogout = () => {
    // Logic to handle logout
    setToken(false);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
