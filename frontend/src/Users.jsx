import { Box, cardClasses } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then(response => {
        console.log(response.data.response);
      })
  }

  return (
    <>
      <Box sx={{
        width: 'calc(100% - 100px)',
        margin: 'auto',
        marginTop: '100px',
      }}>
        <UserForm />
        <UsersTable rows={users} />
      </Box>
    </>
  );
};

export default User;
