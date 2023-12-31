import { Box } from "@mui/material";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace/Marketplace";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./components/Login/Login";
import CreateNewAccount from "./pages/CreateNewAccount/CreateNewAccount";
import Api from "./pages/Api/Api";

function App() {
  return (
    <Box
      sx={{
        background: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api" element={<Api />} />
        <Route path="/create-new-account" element={<CreateNewAccount />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
