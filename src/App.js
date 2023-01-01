import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// page components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create</Link>
          <Link to="/projects/:id">Project</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>

        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/projects/:id" element={<Project />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
