import Router from "./pages/router";
import { HashRouter } from "react-router-dom";
import "./App.css";
// basename="/xyz"/
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
