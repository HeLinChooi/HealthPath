import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@Pages/Home";
import Explore from "@Pages/Explore";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/explore"} element={<Explore />} />
        <Route path={"/research"} element={<Explore />} />
        <Route path={"/profile"} element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
