import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
function change() {
  console.log("first");
}

export default function BasicTable() {
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8080/users");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    loadUsers();
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">email</TableCell>
              <TableCell align="left">package_name</TableCell>
              <TableCell align="left">Capacity</TableCell>
              
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.package_name}</TableCell>
                <TableCell>{user.capacity}</TableCell>
                <TableCell>{user.price}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button>View</Button>
                    <a href={`/UpdateUser/${user.id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    {/* <a href={`/DeleteUser/${user.id}`}> */}
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={()=>deleteUsers(user.id)}
                    >
                      Delete
                    </Button>
                    {/* </a> */}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={change()} href="/Add user" color="inherit">
            submit
          </Button>
    </Container>
  );
}
