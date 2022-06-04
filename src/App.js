import "./App.css";
import {Navigation} from "./components";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer
        theme="dark"
        autoClose={1200}
        limit="2"
        position="bottom-left"
      />
      <Router />
    </div>
  );
}

export default App;
