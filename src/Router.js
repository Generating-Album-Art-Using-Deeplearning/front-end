import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import Home from "./pages/home";
import Result from "./pages/result";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
