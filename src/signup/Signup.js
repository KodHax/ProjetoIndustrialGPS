import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    nome: undefined,
    password: undefined,
    email: undefined,
    morada: undefined,
    username: undefined,
    contribuinte: undefined,
  });

  const navigate = useNavigate();

  //   Handle Change Function
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //   Handle Click Function
  const handleClick = async (e) => {
    navigate("/login")
    };
    
    return (
      <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Cria uma conta!</h1>
          <p>
            Cria a tua própria <br /> conta com os teus dados pessoais
          </p>
          <form>
            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Nome"
              id="nome"
              onChange={handleChange}
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Morada"
              id="morada"
              onChange={handleChange}
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />  

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Contribuinte"
              id="contribuinte"
              onChange={handleChange}
            />

            <button onClick={handleClick}>
              Sign up
            </button>
            <button>
            <NavLink
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Já tem uma conta?
            </NavLink>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
