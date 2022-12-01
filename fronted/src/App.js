import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SigIn from "./Pages/SignIn";
import AddBlog from "./Pages/AddBlog";
import LogIn from "./Pages/Login";
import LogOut from "./Pages/Logout";
import './App.css';
import { LoginState } from "./Context/LoginState";
import Single from "./Pages/Single";



function App() {
  return (
    <LoginState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SigIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/blog/:slug" element={<Single/>}/>

        </Routes>
    </BrowserRouter>
    </LoginState>



  )
}

export default App;
