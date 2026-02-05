import React from "react";
import Navbar from "./Navbar";

/*
 Layout:
 - Fixed nav + content area
*/

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px" }}>{children}</main>
    </>
  );
}