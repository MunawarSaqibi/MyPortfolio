import React from "react";
import { createRoot } from "react-dom/client";
import Applayout from "./src/Applayout.jsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Applayout />);
}