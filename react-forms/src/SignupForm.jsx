import { useState } from "react";
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const fullName = () => {
    console.log(formData.firstName, formData.lastName);
  };
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="FirstName"
          name="firstName"
        />
      </div>
      <div>
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="lastName"
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          name="password"
        />
      </div>
      <button onClick={fullName}>Submit</button>
    </div>
  );
}
export default SignupForm;
