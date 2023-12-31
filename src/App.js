import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Header from "./components/Layout/Header/header.js";
import NotFound from "./pages/error.jsx";
import OneMovie from "./pages/oneMovie";
import OneSerie from "./pages/series.jsx";
import Footer from "./components/footer.js";
import CopyRight from "./pages/copyright.jsx";
import Contact from "./pages/contact"
import Movies from "./pages/movies.jsx";
import SeriesPage from "./pages/seriesPage.jsx";
import Search from "./pages/search.jsx";
import "./index.css";
import "./i18n.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="movies" element={<Movies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="copyright" element={<CopyRight />} />
        <Route path="search" element={<Search />} />
        <Route path="/movie/:id" element={<OneMovie />} />
        <Route path="/tv/:id" element={<OneSerie />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
