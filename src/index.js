import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const root = createRoot(document.getElementById("root"));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
