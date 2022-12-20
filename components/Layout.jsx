import React from "react";
//same as Head in html for metadata but for next.js
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

//now added all passed in components. automatically called children
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecomm Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
