import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./layout/Main.jsx"
import theme from "./theme/Theme";
import { BrowserRouter } from "react-router-dom";
import AnonymousPage from './component/page/AnonymousPage.jsx';

function App() {
  return (
      <ThemeProvider theme={theme} >
          <BrowserRouter>
              <Layout content={<AnonymousPage />}/>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
