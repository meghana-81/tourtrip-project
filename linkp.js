import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";

import Adduser from "./Adduser";
import BasicTable from "./BasicTable";
import UpdateUser from "./UpdateUser";

let Path=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Signup" element={<Signup/>}></Route>
                <Route path="/BasicTable" element={<BasicTable/>}></Route> 
                <Route path="/AddUser" element={<Adduser />}></Route>     
                <Route path="/UpdateUser/:id" element={<UpdateUser/>}></Route>     
            </Routes> 
        </BrowserRouter>
    )
}
export default Path;