import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
