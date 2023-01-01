import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// page components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';

// styles
import './App.css';

function App() {
  const { user, authIsReady } = useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Sidebar />
          <div className="container">
          <Navbar />
            <Routes>
              {!user && <Route path="/" element={<Login />}></Route>}
              {user && <Route path="/" element={<Dashboard />}></Route>}

              {!user && <Route path="/create" element={<Login />}></Route>}
              {user && <Route path="/create" element={<Create />}></Route>}

              {!user && <Route path="/projects/:id" element={<Login />}></Route>}
              {user && <Route path="/projects/:id" element={<Project />}></Route>}

              {user && <Route path="/login" element={<Dashboard />}></Route>}
              {!user && <Route path="/login" element={<Login />}></Route>}

              {user && <Route path="/signup" element={<Dashboard />}></Route>}
              {!user && <Route path="/signup" element={<Signup />}></Route>}
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
