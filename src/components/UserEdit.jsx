import { Box, Container, Typography, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usersSelectors } from "../Redux/slices/usersSlice";
import { loadingSelector } from "../Redux/slices/usersSlice";

const UserEdit = () => {
  const isLoad = useSelector(loadingSelector);
  const { id } = useParams();

  const user = useSelector(usersSelectors.selectAll).find(
    (user) => user.id === Number(id)
  );


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
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Профиль пользователя</Typography>
        <Button>Редактировать</Button>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.name}
        />
        <TextField
          required
          id="outlined-required"
          label="Username"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.username}
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.email}
        />
        <TextField
          required
          id="outlined-required"
          label="Street"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.address.street}
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.address.city}
        />
        <TextField
          required
          id="outlined-required"
          label="Zip code"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.address.zipcode}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.phone}
        />
        <TextField
          required
          id="outlined-required"
          label="Website"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.website}
        />
      </Container>
    </Box>
  );
};

export default UserEdit;
