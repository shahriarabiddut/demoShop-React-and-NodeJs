import React from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomUser from "../components/BottomUser";

const PageLayout = () => {
  //   console.log("load PageLayout");

  return (
    <HelmetProvider>
      <header className="sticky top-0 z-[999]">
        <Header />
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
      <section className="display sticky bottom-0 z-[999] lg:hidden md:hidden">
        <BottomUser />
      </section>
    </HelmetProvider>
  );
};

export default PageLayout;
