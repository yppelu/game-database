import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/components/App.tsx";
import "@/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
