import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main({ receive }) {
  // console.log(receive);

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlingform = (e, receive) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleValidation = () => {
    const newError = {};
    if (input.username.trim() !== receive.username) {
      newError.username = "Incorrect UserName";
    }
    if (input.email !== receive.email) {
      newError.email = "Incorrect Email";
    }
    if (input.password !== receive.password) {
      newError.password = "Incorrect password";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handLeSubmission = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // If validation passes, navigate to homepage
      navigate("/home");
    }
  };

  return (
    <div className="flexing">
      <div className="cartimage">
        {" "}
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
            value={input.username}
            onChange={handlingform}
          />
          {error.username && <span className="error">{error.username}</span>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handlingform}
          />
          {error.email && <span className="error">{error.email}</span>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handlingform}
          />
          {error.password && <span className="error">{error.password}</span>}
          <button type="submit" className="log">
            Login
          </button>
        </form>
        <div className="login">
          <div className="forget">Forget Password</div>
        </div>
      </div>
    </div>
  );
}
export default Main;
