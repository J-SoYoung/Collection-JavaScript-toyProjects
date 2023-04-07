import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";
import NotPage from "./pages/NotPage";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}

export default AppRoute;
