import './App.scss';
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout'

const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));
const DesignMain = lazy(() => import("./components/Designs/DesignMain"));
// const Design1 = lazy(() => import("./components/Design"));


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Route path="/" exact component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/design" component={DesignMain} />
            </Layout>
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
