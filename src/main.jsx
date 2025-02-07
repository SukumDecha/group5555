import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ Fixed Path
import "./styles/index.css"; // ✅ Moved to styles folder
import App from "./App"; // ✅ No need for `.jsx` extension

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
