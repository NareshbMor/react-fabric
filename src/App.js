import './App.scss';
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
