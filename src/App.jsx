import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import ScrollToTop from "./utils/ScrollToUp";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
