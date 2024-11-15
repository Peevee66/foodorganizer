import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid xs={12} sm={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid xs={12} sm={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid xs={12} sm={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;