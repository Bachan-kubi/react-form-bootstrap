import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

const UserForm = () => {
  const [inval, setINP] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleInputData=(e)=>{
    e.preventDefault();
    // console.log(e.target.value);
    const {name, value}= e.target;
    setINP((preval)=>{
      return{
        ...preval,
        [name]: value
      }
    })
    
  }
  return (
    <div>
      <Container className="bg-light w-50 mt-4">
        <Form>
          <label>Name: </label>
          <input onChange={handleInputData} value={inval.name} type="text" name="name" placeholder="Enter your Name" />
          <br />
          <label>Email:</label>
          <input onChange={handleInputData} value={inval.email} type="email" name="email" placeholder="Enter your Name" /> <br />
          <label>Mobile No:</label>
          <input onChange={handleInputData} value={inval.mobile} type="number" name="mobile" placeholder="Enter your Name" /> <br />
          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserForm;
