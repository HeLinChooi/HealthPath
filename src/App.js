import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import Explore from "@Pages/Explore";
import Profile from "@Pages/Profile";
import MyCart from "@Pages/MyCart";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/explore"} element={<Explore />} />
        <Route path={"/research"} element={<Explore />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/my-cart"} element={<MyCart />} />
      </Routes>
    </>
  );
}

export default App;
