import { ColorModeContext, useMode } from "./theme";
import {ThemeProvider, CssBaseline} from '@mui/material';
import TopBar from "./scenes/global/TopBar";

function App() {

  const [theme, colorMode] = useMode();
  console.log(theme);
  console.log(colorMode);

  const handleDarkModeButton = () => {
    colorMode.toggleColorMode();
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <TopBar />
            <h1>Admin Dashboard</h1>
            <button onClick={handleDarkModeButton} type="button">Dark mode</button>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
