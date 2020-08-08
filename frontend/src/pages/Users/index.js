import React, { useState, useEffect } from "react";
import api from "../../services/";
import { Container, Button } from "reactstrap";
import TableList from "../../components/TableList";
import TableHeader from "../../components/TableList/TableHeader";
import TableBody from "../../components/TableList/TableBody";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);

  // GET: Listando minha API
  useEffect(() => {
    api.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteUsers = (id) => {
    console.log(id);
    api.delete(`/api/users/${id}`).then((res) => {
      const filters = data.filter((item) => item.id !== id);
      setData(filters);
    });
  };

  return (
    <>
      <Container>
        <h1>Users</h1>
        <Link className="btn btn-primary my-2" to="/newUsers">
          New users
        </Link>
        <TableList>
          <TableHeader name="Name" email="E-mail" actions="Actions" />
          {data.map((user) => {
            return (
              <TableBody
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
              >
                <Link className="btn btn-warning" to={"/api/users" + user.id}>
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
