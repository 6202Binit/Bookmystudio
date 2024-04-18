import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBarPage from "./pages/NavBarPage";
import NoPage from "./pages/NoPage";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import BookTour from "./pages/BookTour"
import CustomSchedule from "./pages/CustomSchedule";
import ScheduleTour from "./pages/ScheduleTour";

function App() {
  return (
    <>
      <NavBarPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/booktour" element={<BookTour />} />
        <Route path="/customSchedule" element={<CustomSchedule />} />
        <Route path="/scheduleTour" element={<ScheduleTour />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
