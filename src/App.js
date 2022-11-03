import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import HomePage from "./components/Homepage/HomePage";
import Tickets from "./components/Tickets/Tickets";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Info from "./components/Info/Info";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/events" element={<Events />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
