import Home from "./pages/Home";
import SDGs from "./pages/SDGs";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Team from "./pages/Team";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MUISpeedDial from "./components/MUISpeedDial";
import NotFound from "./components/NotFound";

AOS.init();

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sdg" element={<SDGs />} />
          <Route path="/team" element={<Team />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MUISpeedDial />
    </div>
  );
};

export default App;
