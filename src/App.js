import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppPage from "./pages/AppPage";
import UserPage from "./pages/UserPage";

function App() { 
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/user">User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AppPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );

}

export default App;
