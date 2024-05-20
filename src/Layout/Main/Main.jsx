import { Outlet } from "react-router-dom";
import Footer from "../../pages/shares/Footer";
import Navbar from "../../pages/shares/Navbar/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
