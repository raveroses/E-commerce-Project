import Main from "../Components/Main";
// import Login from "./Pages/Login";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [receive, setReceiver] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReceiver({ ...receive, [name]: value });
  };

  const handleValidation = () => {
    const newError = {};
    if (!receive.username.trim()) {
      newError.username = "Username is required";
    }
    if (!pattern.test(receive.email)) {
      newError.email = "Invalid email format";
    }
    if (receive.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  const [show, setShaow] = useState(true);
  const handLeSubmission = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setShaow((prev) => !prev);
    }
  };

  return (
    <>
      <hr style={{ marginTop: "20px" }} />
      {show ? (
        <Main2
          handLeSubmission={handLeSubmission}
          handleOnChange={handleOnChange}
          receive={receive}
          error={error}
          show={show}
        />
      ) : (
        <Main receive={receive} show={show} />
      )}
    </>
  );
};

function Main2({ receive, handLeSubmission, handleOnChange, error }) {
  return (
    <>
      <div className="flexing">
        <div className="cartimage">
          <img src="./images/cart-phone.jpg" alt="cart-phone" />
        </div>

        <div className="form">
          <h3>Create an account</h3>
          <p>Enter your details below</p>
          <form onSubmit={handLeSubmission}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={receive.username}
              onChange={handleOnChange}
            />
            {error.username && <span className="error">{error.username}</span>}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={receive.email}
              onChange={handleOnChange}
            />
            {error.email && <span className="error">{error.email}</span>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={receive.password}
              onChange={handleOnChange}
            />
            {error.password && <span className="error">{error.password}</span>}
            <div>
              <button type="submit" className="create">
                Create Account
              </button>
            </div>
          </form>
          <div className="google">
            <img src="./images/google.jpg" alt="google-image" /> Sign up with
            Google
          </div>
          <div className="log">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
