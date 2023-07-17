import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Token from "../pages/Token";
import Portfolio from "../pages/Portfolio";
import CryptoAiChat from "../pages/CryptoAiChat";
import Account from "../pages/Account";
import Settings from "../pages/Settings";
import Help from "../pages/Help";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/market",
        element: <Market></Market>,
      },
      {
        path: "/token",
        element: <Token></Token>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/cryptoAiChat",
        element: <CryptoAiChat></CryptoAiChat>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
    ],
  },
]);
