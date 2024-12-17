import './App.css';
import { useState, useEffect } from 'react';
import { 
  Container, 
  AppBar, 
  Typography, 
  Grow, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'; // Correct import for Grid2
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './Styles';

// Create a theme with some basic configuration
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
              Memories
            </Typography>
            <img 
              className={classes.image} 
              src="/images/favicon.ico" 
              alt="memories" 
              height="60" 
              width="60"
            />
          </AppBar>
          <Grow in>
            <Container>
              <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;