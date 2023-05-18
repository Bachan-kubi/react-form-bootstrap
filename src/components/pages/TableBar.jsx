import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

const TableBar = () => {
  return (
    <div>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kubi</td>
              <td>kubi@gmail.com</td>
              <td>01919735497</td>
              <td>
                <Button className="me-2" variant="success">Read</Button>
                <Button className="me-2" variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kubi</td>
              <td>kubi@gmail.com</td>
              <td>01919735497</td>
              <td>
                <Button className="me-2" variant="success">Read</Button>
                <Button className="me-2" variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableBar;
