// Form.jsx
import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { inputFields } from "./InputField.js";
import "./Form.css"; // Corrected the filename
import { useNavigate } from "react-router-dom";

function Form() {
  const [form, setForm] = useState("Sign In");
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here, using the formData state
    console.log("Form submitted with data:", formData);
    navigate("/home");
  };

  const handleRegister = () => {
    setForm((prev) =>
      prev === "Sign In" ? (prev = "Sign Up") : (prev = "Sign In")
    );
  };

  return (
    <div className="login_signup">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>{form}</h1>
        {inputFields
          .filter((field) =>
            form === "Sign In" ? field.name !== "username" : true
          )
          .map((field) => (
            <Input
              key={field.id}
              id={field.id}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              errormsg={field.errormsg}
              pattern={field.pattern}
              required={field.required}
              handleChange={handleInputChange}
            />
          ))}
        <p>
          {form === "Sign In" ? "New User?" : "Already Registered?"}{" "}
          <span onClick={handleRegister}>
            {form === "Sign In" ? "Register Here" : "Sign In Here"}
          </span>
        </p>
        <button type="submit">{form}</button>
      </form>
    </div>
  );
}

export default Form;
