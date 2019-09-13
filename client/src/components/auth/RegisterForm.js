import React from "react";

const RegisterForm = ({ toggleCheck, register }) => {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      password2: "",
      terms: false
    },
    []
  );
};

const { email, terms, password, password2 } = formData;

const onChange = e => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const onRegister = async e => {
  e.preventDefault();
  if (password !== password2) {
    showErrorSnackbar("Passwords do not match");
  } else if (terms) {
    showInfoSnackbar("Please read and agree to our Terms and Conditions");
  } else {
    register({ email, terms, password });
  }
};

export default RegisterForm;
