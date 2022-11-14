import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import {ThemeProvider, CssBaseline} from '@mui/material';
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/Bar";
import Contacts from "./scenes/Contacts";
import FAQ from "./scenes/FAQ";
import Form from "./scenes/Form";
import Geography from "./scenes/Geography";
import Invoices from "./scenes/Invoices";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Team from "./scenes/Team";
import Calendar from "./scenes/Calendar";


function App() {

  const [theme, colorMode] = useMode();

  const handleDarkModeButton = () => {
    colorMode.toggleColorMode();
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <div className="bars">
              <div className="sidebarWrapper">
                <SideBar />
              </div>
              <div className="topbarWrapper">
                <TopBar />
              </div>
            </div>
            
            {/* <SideBar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
