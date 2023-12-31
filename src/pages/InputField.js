export const inputFields = [
  {
    id: "username",
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter your username",
    errormsg:
      "User name should be 3 to 16 chanrcters long and does not containd symbols",
    pattern: "[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    errormsg: "Please enter a valid email address.",
    required: true,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    errormsg:
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  // Add more objects for additional input fields
];
