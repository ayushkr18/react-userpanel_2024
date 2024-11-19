import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import MyNav from "./MyNav.jsx";
import MyCarousel from "./MyCarousel.jsx";
import MyCard from "./MyCard.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <MyNav />
    <MyCarousel />
    <MyCard />
  </div>
);
