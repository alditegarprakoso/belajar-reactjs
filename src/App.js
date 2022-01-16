import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="app">
      <div className="brand">Website Aldi</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>

        <Link to="/blog" className="nav-item">
          Blog
        </Link>

        <Link to="/todo" className="nav-item">
          ToDo
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
