import Home from "./pages/home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookshelf from "./pages/bookshelf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
