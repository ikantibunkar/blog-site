import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Single from "./pages/single/Single";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Home/> : <Login />} />
      <Route path="/register" element={user ? <Home/> : <Register />} />
      <Route path="/write" element={user ? <Write />: <Register/> } />
      <Route path="/settings" element={user ? <Setting />: <Register/>}  />
      <Route path="/post/:postId" element={<Single />} />
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;

 