import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
