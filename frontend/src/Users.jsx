import UserForm from "./UserForm";

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
        <UserForm />
    </>
  );
};

export default User;