import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl mb-4">Login Page</h1>
      {/* Login form can go here */}
      <p className="mb-2">
        Don't have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
      </p>
      <Link to="/" className="text-blue-500">Back to Home</Link>
    </div>
  );
};
export default Login;