import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isRoomDetailsPage = location.pathname.startsWith("/room/");

  return (
    <>
      {!isRoomDetailsPage && <Navbar />}
      {children}
      {!isRoomDetailsPage && <Footer />}
    </>
  );
};

export default Layout;
