import React, { useState } from "react";
import api from "../../services";
import { Redirect } from "react-router-dom";

const NewUsers = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);

  // Pegar o valor de um form
  const handleValue = (field) => (event) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  // Salvando na API
  const save = () => {
    api
      .post("/users", {
        ...form,
      })
      .then((res) => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to="/users" />;
  }

  return (
    <div className="container">
      <h1>New User</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={handleValue("name")}
            placeholder="Your name"
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={handleValue("email")}
            placeholder="Your e-mail"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={save}>
          Save
        </button>
      </form>
    </div>
  );
};

export default NewUsers;
