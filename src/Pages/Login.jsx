import Main from "../Components/Main";

const Login = ({ receive }) => {
  return (
    <div>
      <hr style={{ marginTop: "20px" }} />
      <Main receive={receive} />
    </div>
  );
};

export default Login;
