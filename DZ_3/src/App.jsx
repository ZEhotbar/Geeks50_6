import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", margin: "10px" }}>
        <Link to="/">Пользователи</Link>
        <Link to="/posts">Посты</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
