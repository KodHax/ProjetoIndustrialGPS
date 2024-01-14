import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    user: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  //   Handle Change Function
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //   Handle Click Function
  const handleClick = async (e) => {
    e.preventDefault();
    if (credentials.user === "admin" && credentials.password === "admin") {
      navigate("/dashboard")
    } else {
      navigate(-1)
    }
  };
  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Entre na sua conta!</h1>
          <p>Entre com seus dados pessoais para continuar</p>
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
              placeholder="User"
              id="user"
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
            <button onClick={handleClick}>
              Login
            </button>
          </form>
        </div>
        <div className="left">
          <h1>Bem vindo de volta!</h1>
          <p>para continuar, faça o login com as informações da sua conta pessoal</p>
          <span style={{ padding: "20px 0" }}>Não tem uma conta?</span>

          <button>
            <NavLink
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Registar
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
