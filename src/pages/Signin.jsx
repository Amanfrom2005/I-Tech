import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl mb-4">Sign In Page</h1>
      {/* Signin form can go here */}
      <p className="mb-2">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
      <Link to="/" className="text-blue-500">Back to Home</Link>
    </div>
  );
}

export default Signin;
