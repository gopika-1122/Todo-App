import './App.css';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import { useState } from 'react';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  return (

 <BrowserRouter>
 {auth==null ? (
 <Routes>
 <Route path="/" element={<Login/>}></Route>
 <Route path="/register" element={<Register/>}></Route>
 </Routes>
 ): auth.status==0 ? (
 <Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/edit" element={<Edit/>}></Route>

 </Routes>
 ):null}

 </BrowserRouter>

  );
}


export default App;
