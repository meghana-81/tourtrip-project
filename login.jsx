import React from "react";
import { Paper, Grid, Avatar, TextField, Container, Button, Stack, Typography } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import image from "./backgrnd.jpg";

const Login = () => {

   let n=useNavigate("")

  let Siup=()=>{
    n("/Home")
  }

  let Sign=()=>{
    return(
      n("/Signup")
    )
  }
 
  const paperStyle = { padding: 30, height: '60vh', width: 400, margin: "30px auto"}
  const btnstyle={margin: '9px 0'}
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundSize:"cover", width:"100rem",height:"45rem"}}>
    <div>
      <Container maxWidth="xs">
    
    <Stack spacing={2}>
       
      <Grid>
    
        <Paper elevation={20} style={paperStyle}> 
    
          <Grid align='center' >
            <Avatar sx={{ bgcolor: deepOrange[800] }}>L</Avatar>

            <h1>Login</h1>
          
          </Grid >
        
          <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined"
          margin="normal"
          sx={{width: "20rem"}} />
      
          <TextField 
          id="phone"
          label="phone"
          variant="outlined"
          type="number"
          margin="normal"
          sx={{width: "20rem"}} />
          
           <br />
          <Button onClick={Siup}
            sx={{marginTop:3,borderRadius:3,width: "20rem"}} 
            variant="contained" style={btnstyle}>
            Login
          </Button>
          <Typography> Do you have Register ? 
  <button onClick={Sign}>SIGNUP</button>

            
          </Typography>
          
         
        </Paper>
        
      </Grid>
      
    </Stack>
    
  </Container>
    </div>
    </div>
  
    

  
  );
};
export default Login;