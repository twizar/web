import React, {useState, useEffect} from 'react';
import { ThemeProvider } from "@mui/material/styles";
import  MainLayout  from "./layout/MainLayout.jsx"
import UsersRepository  from "./repository/UsersRepository.js"
import theme from "./theme/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AnonymousPage from './component/page/AnonymousPage.jsx';
import {
    PATH_ABOUT,
    PATH_FEEDBACK,
    PATH_STATS,
    PATH_PLAYERS_STATS,
    PATH_TOURNEY_STATS,
} from "./config/config";
import {Auth, API} from "aws-amplify";
import MainPage from "./component/page/MainPage/MainPage";

function App() {
    const [teams, setTeams] = useState([])
    const [users, setUsers] = useState([])
    const [userCognito, setUserCognito] = useState(null)

    useEffect(() => {

        UsersRepository.GetUsers().then(users => {
            setUsers(users)
        })

        Auth.currentAuthenticatedUser().then(user => {
            setUserCognito(user);
        })

        API.get("Teams", "/teams", null).then(teams => setTeams(teams))
  }, [])

  return (
      <ThemeProvider theme={theme} >
          <BrowserRouter>
              <MainLayout
                  user={userCognito}
                  content={userCognito ? <MainPage users={users} teams={teams} /> : <AnonymousPage />}
              />
              <Switch>
                    <Route exact path={PATH_ABOUT} />
                    <Route exact path={PATH_FEEDBACK} />
                    <Route exact path={PATH_STATS} />
                    <Route exact path={PATH_PLAYERS_STATS} />
                    <Route exact path={PATH_TOURNEY_STATS} />
              </Switch>
          </BrowserRouter>
      </ThemeProvider>
  );
}
export default App;
