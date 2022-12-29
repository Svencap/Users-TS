import UserCard from "./UserCard";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { usersSelectors } from "../Redux/slices/usersSlice";
import { loadingSelector } from "../Redux/slices/usersSlice";

const UsersList = () => {

  const isLoad = useSelector(loadingSelector);

  const users = useSelector(usersSelectors.selectAll);

  console.log(isLoad);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexGrow: 2,
        paddingTop: "30px",
      }}
    >
      <Container>
        <Typography variant="h6">Список пользователей</Typography>
      </Container>
      {users.map((user: any) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          city={user.address.city}
          company={user.company.name}
        />
      ))}
      <Container>
        <Typography sx={{ textAlign: 'right', pb: '10px', fontWeight: 400 }} variant="subtitle2" component={'p'}>Найдено пользователей {users.length}</Typography>
      </Container>
    </Box>
  );
};

export default UsersList;
