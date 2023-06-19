import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email:"",
    package_name:"",
    capacity:"",
    price:"",
  });

  const { name, email, package_name, capacity, price } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8080/user", userData);
    setUserData({ name: "", email:"", package_name:"", capacity:"", price:""});
    navigate("/BasicTable");
  };

  return (
    
    <Container>
    
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              align="center"
              label="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              onChange={handleData}
            />
            <TextField
              label="Package Name"
              name="package_name"
              value={package_name}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="Capacity"
              name="capacity"
              value={capacity}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="Price"
              name="price"
              value={price}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
      
    </Container>
    
  );
};

export default AddUser;
