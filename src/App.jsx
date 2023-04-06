import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Outlet>
        <Home />
      </Outlet>
    </div>
  );
}

export default App;
