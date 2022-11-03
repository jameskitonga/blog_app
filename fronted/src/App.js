import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddBlog from "./Pages/AddBlog";

import './App.css';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlog/>}/>
    </Routes>
    </BrowserRouter>
    
    // <>
    // <p>gdjtdrdyugfuf7yf</p></>
  
  )
}

export default App;
