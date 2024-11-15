import { Outlet } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
//import stars from "../assets/star.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import { DarkModeProvider } from "../context/DarkModeContext";

export default function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <div className=" w-full  font-sans pic bg-[var(--color-bg)]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
