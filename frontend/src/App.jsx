import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth"

// Create a theme with breakpoints
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
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Container maxWidth="lg">
            <Navbar />
            <Routes >
                <Route path='/'  exact element={<Home />} />
                <Route path='/auth'  exact element={<Auth />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
