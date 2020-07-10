import React, { useState, useEffect } from "react";
import api from "../../services/";
import { Container } from "reactstrap";
import TableList from "../../components/TableList";
import TableHeader from "../../components/TableList/TableHeader";
import TableBody from "../../components/TableList/TableBody";
import { Link } from "react-router-dom";

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
      <Container>
        <h1>Users</h1>
        <Link className="btn btn-primary my-2" to="/newUsers">
          New users
        </Link>
        <TableList>
          <TableHeader name="Name" email="E-mail" actions="Actions" />
          {data.map((user) => {
            return (
              <TableBody key={user.id} name={user.name} email={user.email}>
                <Link className="btn btn-warning">Edit</Link>
              </TableBody>
            );
          })}
        </TableList>
      </Container>
    </>
  );
};

export default Users;
