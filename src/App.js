import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer
        theme="dark"
        autoClose={2000}
        limit="2"
        position="bottom-right"
      />
      <Router />
    </div>
  );
}

export default App;
