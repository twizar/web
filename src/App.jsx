import React, {useState, useEffect} from 'react';
import { ThemeProvider } from "@material-ui/styles";
import  MainLayout  from "./layout/MainLayout.jsx"
import theme from "./theme/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AnonymousPage from './component/page/AnonymousPage.jsx';
import MainPage from './component/page/MainPage/MainPage.jsx';
import {PATH_ABOUT, PATH_FEEDBACK, PATH_STATS, PATH_PLAYERS_STATS, PATH_TOURNEY_STATS} from "./config/config";

function App() {

  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
      fetch('http://localhost:9779/teams/')
          .then(response => response.json())
          .then(uploadedTeams => setTeams(uploadedTeams))
      fetch('http://localhost:9779/players/')
          .then(response => response.json())
          .then(uploadPlayers => setPlayers(uploadPlayers))
  }, [])

  return (
      <ThemeProvider theme={theme} >
          <BrowserRouter>
              {/*<MainLayout content={<MainPage teams={teams} players={players} />} />*/}
              <MainLayout content={<AnonymousPage />} />
              <Switch>
                    <Route exact path={PATH_ABOUT} component={() => <div>About</div>} />
                    <Route exact path={PATH_FEEDBACK} component={() => <div>Feedback</div>} />
                    <Route exact path={PATH_STATS} component={() => <div>Stats</div>} />
                    <Route exact path={PATH_PLAYERS_STATS} component={() => <div>PLayer stats</div>} />
                    <Route exact path={PATH_TOURNEY_STATS} component={() => <div>Tourney stats</div>} />
              </Switch>
          </BrowserRouter>
      </ThemeProvider>
  );
}
export default App;
