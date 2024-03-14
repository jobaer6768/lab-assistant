import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  // Define state variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentID, setStudentID] = useState("");

  // Get history object for navigation

  // Get axios instance
  const axiosPublic = useAxiosPublic();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object with user registration information
    const userData = {
      name,
      email,
      password,
      studentID,
    };

    try {
      // Make POST request to backend register route
      const response = await axiosPublic.post("/auth/register", userData);

      // Handle successful registration
      console.log(response.data);
      // Redirect user to login page or any other route upon successful registration
    } catch (error) {
      // Handle registration error
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="w-4/5 container mx-auto flex justify-center my-8">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Student ID</span>
            </label>
            <input
              type="text"
              placeholder="Student ID"
              className="input input-bordered"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <p className="text-center my-2 text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
