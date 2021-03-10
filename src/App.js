import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import initFontAwesome from "./AwsomeLib/initFontAwesome";
import NotFound from "./components/404/NotFound";
import Main from "./components/Main/Main";
import TeamDetails from "./components/TeamDetails/TeamDetails";
initFontAwesome();
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/teamdetails/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
