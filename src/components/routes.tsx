import { Route, Switch, Redirect } from "wouter";
import DataSourceSelect from "./data-source-select";
import Visualizer from "./visualizer";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={DataSourceSelect} />
      <Route path="/visualizer" component={Visualizer} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default Routes;
