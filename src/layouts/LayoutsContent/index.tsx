import { Outlet } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const LayoutsContent = () => {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="w-full pt-20 max-w-7xl mx-auto">
        <div className="flex flex-col w-full ">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LayoutsContent;
