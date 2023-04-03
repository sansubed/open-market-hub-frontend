import { Box } from "@mui/material";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./components/theme/theme";

function App() {
  return (
    <Box
      sx={{
        background: "#FFF",
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
