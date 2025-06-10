import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import EntriesPage from "./pages/EntriesPage";
import NewEntryPage from "./pages/NewEntryPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntriesPage />} />
        <Route path="/new" element={<NewEntryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
