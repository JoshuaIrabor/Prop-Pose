import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserPlus,
  User,
  ArrowRight,
  Loader
} from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../Stores/useUserStore";
import "./SignUp.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="signup-container">
      {/* Header */}
      <motion.div
        className="signup-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Create an account</h2>
        <p className="signup-subtitle">
          Sign up to get started
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="signup-card-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="signup-card">
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="123@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="spin" />
                  Loading...
                </>
              ) : (
                <>
                  <UserPlus />
                  Sign Up
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="login-link">
            Already have an account?
            <Link to="/login">
              Login here <ArrowRight />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
