import React from "react";
import { ToastContainer } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";

import EventForm from "../EventForm";

import { postEvent } from "../../api/requests";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  const toastContainer = (
    <ToastContainer
      position="bottom-center"
      draggableDirection="y"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  return (
    <main className={classes.layout}>
      <EventForm postEvent={postEvent} />
      {toastContainer}
    </main>
  );
};

export default Main;
