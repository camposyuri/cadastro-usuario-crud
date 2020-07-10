import React, { useState, useEffect } from "react";
import api from "../../services/";

const Users = () => {
  const [data, setData] = useState([]);

  // Listando minha API
  useEffect(() => {
    api.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {JSON.stringify(data)}
    </>
  );
};

export default Users;
