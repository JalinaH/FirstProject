import { Box, cardClasses } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const User = () => {
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
