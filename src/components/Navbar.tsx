import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const Navbar = (): any => {
  return (
    <Box sx={{ background: "#BDBDBD", width: 300, paddingTop: '30px' }}>
      <Container maxWidth="xs">
        <Typography gutterBottom>Сортировка</Typography>
        <Stack direction="column" spacing={2}>
          <Button variant="contained">По городу</Button>
          <Button variant="contained">По компании</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
