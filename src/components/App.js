import * as Pages from "../pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Pages.MainPage />} />
        <Route exact path="/register" render={() => <Pages.SignUpPage />} />
        <Route exact path="/calendar" render={() => <Pages.CalendarPage />} />
        <Route exact path="/community" render={() => <Pages.CommunityPage />} />
      </Switch>
    </>
  );
}

export default App;
