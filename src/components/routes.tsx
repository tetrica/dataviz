import { Route, Switch, Redirect } from "wouter";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={() => <h1>Home</h1>} />
      <Route path="/chart" component={() => <h1>Chart</h1>} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default Routes;
