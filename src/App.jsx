import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React-Router App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/todos">ToDo's</Link>
          </li>
          <li>
            <Link to="/addTodo">Add ToDo</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
