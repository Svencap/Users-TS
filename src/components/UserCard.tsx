import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

interface User {
  name: string;
  city: string;
  company: string;
}

const UserCard = ({ name, city, company }: User) => {
  return (
    <Container>
      <Card sx={{ background: "#F3F3F3", borderRadius: '8px' }}>
        <CardContent sx={{ '&:last-child': { paddingBottom: 2 } }}>
          <Typography sx={{ fontSize: 14, marginBottom: '7px' }}>ФИО: {name}</Typography>
          <Typography sx={{ marginBottom: '7px' }} variant="body2">Город: {city}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Компания: {company}</Typography>
            <Button size="small" sx={{ padding: 0 }}>
              Подробнее
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserCard;
