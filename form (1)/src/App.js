import "./App.css";
import { useEffect, useState, useRef } from "react";
import InputForm from "./Input";
import MobileNumber from "./MobileNumber";

const formValidator = {
  firstName: {
    regexp: /^([a-zA-Z0-9_-]){1,15}$/,
    message: 'Firstname must contain up to 15 latin symbols'
  },
  lastName: {
    regexp: /^([a-zA-Z0-9_-]){1,15}$/,
    message: 'Lastname must contain up to 15 latin symbols'
  },
  number: {
    regexp: /^[+]?[(]?[0-9]{1}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,8}$/im,
    message: 'Number must contain 8-12 digits',
  },
  emailAddress: {
    regexp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Invalid email'
  }
};

function App() {
  // const formRef = useRef();
  const [form, setForm] = useState({
    firstName: { value: "", error: null },
    lastName: { value: "", error: null },
    number: { value: "", error: null },
    emailAddress: { value: "", error: null },
    gender: { value: "", error: null },
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...form,
      [name]: {
        value,
        error: validateForm(name, value),
      },
    };
    setForm(updatedForm);
  };

  // useEffect(() => {
  //   formRef.current.addEventListener("change", validateForm);
  //   return () => {
  //     formRef.current.removeEventListener("change", validateForm);
  //   };
  // }, [formRef]);

  const validateForm = (name, value) => {
    return formValidator[name].regexp.test(value) ? null : formValidator[name].message;
  };

  return (
    <div className="App">
      <h1>Form</h1>
      {/* ref={formRef} */}
      <form className="form" action=""> 
        <InputForm
          label="First Name"
          name="firstName"
          error={form.firstName.error}
          value={form.firstName.value}
          onChange={handleFormChange}
        />
        <br />
        <InputForm
          label="Last Name"
          name="lastName"
          error={form.lastName.error}
          value={form.lastName.value}
          onChange={handleFormChange}
        />
        <br />
        <MobileNumber
          label="Phone Number"
          type="tel"
          name="number"
          error={form.number.error}
          value={form.number.value}
          onChange={handleFormChange}
        />
        <br />
        <InputForm
          label="Email Address"
          type="email"
          name="emailAddress"
          error={form.emailAddress.error}
          value={form.emailAddress.value}
          onChange={handleFormChange}
        />
        <br />
        <p>Gender:</p>
        <br />
        <div className="gender">
          <InputForm
            label="Male"
            type="radio"
            name="gender"
            value="1"
            required
            onChange={handleFormChange}
          />
          <InputForm
            label="Female"
            type="radio"
            name="gender"
            value="2"
            required
            onChange={handleFormChange}
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={(e) => {
            validateForm();
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
