import React from "react";
import { CssBaseline } from "@material-ui/core";

import Header from "./components/Header";
import Main from "./components/Main";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <CssBaseline />
    </>
  );
};

export default App;
