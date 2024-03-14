import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// TODO: TOKEN
const Login = () => {
  // Define state variables to store form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // Get current location
  const location = useLocation();
  const navigate = useNavigate();

  // Get axios instance
  const axiosPublic = useAxiosPublic();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object with user login information
    const userData = {
      email,
      password,
    };

    try {
      // Make POST request to backend login route
      const response = await axiosPublic.post("/auth/login", userData);

      // Handle successful login
      console.log(response.data);
      const { token } = response.data;
      setToken(token);
      sessionStorage.setItem("token", token);
      // Redirect user to dashboard or any other route upon successful login
      // Use the previous location if available, otherwise redirect to dashboard
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from, { replace: true });
    } catch (error) {
      // Handle login error
      console.error("Error logging in:", error);
      // Display error message to the user
      // You can use a toast library or any other method to display error messages
    }
  };

  return (
    <div>
      {/* Login Page */}
      <div className="w-4/5 container mx-auto flex justify-center my-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center my-2 text-xs">
            Do not have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
