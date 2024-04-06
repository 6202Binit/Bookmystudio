import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Navbar1 from "./components/Navbar1";
// import Navbar2 from "./components/Navbar2";
// import Footers from "./components/Footers";
import Home from "./pages/Home";
import NavBarPage from "./pages/NavBarPage";
// import Explore from "./pages/Explore";
import NoPage from "./pages/NoPage";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <NavBarPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
