import React, { useState, useEffect } from "react";
import api from "../../services/";
import { Container, Button, Alert } from "reactstrap";
import TableList from "../../components/TableList";
import TableHeader from "../../components/TableList/TableHeader";
import TableBody from "../../components/TableList/TableBody";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);

  // GET: Listing my users of API
  useEffect(() => {
    api.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);

  // Function delete users
  const deleteUsers = (id) => {
    api.delete("/users/" + id).then((res) => {
      const filters = data.filter((item) => item.id !== id);
      setData(filters);
    });
  };

  // When not exists register users
  if (data.length === 0) {
    return (
      <Container>
        <h1>Users</h1>
        <Link className="btn btn-primary my-2" to="/newUsers">
          New users
        </Link>
        <Alert color="warning">You it hasn't users create</Alert>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <h1>Users</h1>
        <Link className="btn btn-primary my-2" to="/newUsers">
          New users
        </Link>

        <TableList>
          <TableHeader id="ID" name="Name" email="E-mail" actions="Actions" />
          {data.map((user) => {
            return (
              <TableBody
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
              >
                <Link className="btn btn-warning" to={"/users" + user.id}>
                  Edit
                </Link>
                <Button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteUsers(user.id)}
                >
                  Delete
                </Button>
              </TableBody>
            );
          })}
        </TableList>
      </Container>
    </>
  );
};

export default Users;
