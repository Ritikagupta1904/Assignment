// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <>
      <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>

              {/* Email input */}
              <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
              </div>

              {/* Password input */}
              <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                
              </div>

              

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;



//       {/* <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        //   required
//         />
//         <input
//           type="password"
//           placeholder="Password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        //   required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>} */}
//     {/* </div> */}
