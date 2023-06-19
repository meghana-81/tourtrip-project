import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    email:"",
    package_name:"",
    capacity:"",
    price:""
  });

  const { name, email, package_name, capacity, price } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/update/${id}`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/finduser/${id}`);
    setUserData(result.data);
  };

  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
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
              label="Package_name"
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
                Add User
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

export default UpdateUser;
