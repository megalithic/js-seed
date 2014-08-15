/** @jsx React.DOM */
var Router = require('react-router');
var Routes = Router.Routes
var Route = Router.Route;

module.exports = (
  <Routes>
    <Route location="page" handler={require('../components/app')}>
      <Route name="welcome" path="/" handler={require('../components/index')} />
      <Route name="goodbye" path="/goodbye" handler={require('../components/goodbye')} />
    </Route>
  </Routes>
);
