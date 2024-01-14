import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./pages/listagem/Listagem";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Erro from "./pages/erro/Erro";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<>
          <Navbar/>
          <Erro texto = {"Erro 404 : Algo correu mal!"}/>
          <Footer/>
      </>}/>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Listagem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
