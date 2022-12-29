import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { loadingSelector } from "../Redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  city: string;
  company: string;
}

const UserCard: React.FC<User> = ({ id, name, city, company }) => {
  const isLoad = useSelector(loadingSelector);

  const navigate = useNavigate();

  return (
    <Container>
      <Card sx={{ background: "#F3F3F3", borderRadius: "8px" }}>
        <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
          {isLoad ? (
            <Typography sx={{ fontSize: 14, marginBottom: "7px" }}>
              ФИО: {name}
            </Typography>
          ) : null}
          <Typography sx={{ marginBottom: "7px" }} variant="body2">
            Город: {city}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Компания: {company}</Typography>
            <Button size="small" sx={{ padding: 0 }} onClick={() => navigate({ pathname: `/${id}` })}>
              Подробнее
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserCard;
