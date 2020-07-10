import React from "react";
import { Table } from "reactstrap";

const TableList = ({ children }) => {
  return (
    <>
      <Table hover responsive size="sm">
        {children}
      </Table>
    </>
  );
};

export default TableList;
