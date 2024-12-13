import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    fullname: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="email"
            className="grow"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="fullname"
            className="grow"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;