import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home"; // Assuming Home is your landing page
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Banner from "../src/components/Banner/Banner"; // Adjust the path as needed
import CruiseSearchPage from "./cruise/CruiseSearchPage"; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cruise-search" element={<CruiseSearchPage />} /> {/* Route for Cruise Search */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
