import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MUISpeedDial from "./components/MUISpeedDial";

AOS.init();

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <MUISpeedDial />
    </div>
  );
};

export default App;
