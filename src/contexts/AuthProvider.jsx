import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [subscription, setSubscription] = useState("free");
  const [activeTab, setActiveTab] = useState("performance");
  const [activeTabPro, setActiveTapPro] = useState("priceInsights");

  const authInfo = {
    subscription,
    setSubscription,
    activeTab,
    setActiveTab,
    activeTabPro,
    setActiveTapPro,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
