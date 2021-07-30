import { ToastContainer } from "react-toastify";

import EventForm from "./components/EventForm";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <EventForm />
      <ToastContainer />
    </>
  );
};

export default App;
