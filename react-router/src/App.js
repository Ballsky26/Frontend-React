import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blogs";
import Contact from "../src/pages/Contact";
import NoPage from "../src/pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
