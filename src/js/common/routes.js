/** @jsx React.DOM */
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

module.exports = (
  <Routes>
    <Route location="page" handler={require('../components/app')}>
      <Route name="home" path="/" handler={require('../components/home')} />
      <Route name="about" path="/about" handler={require('../components/about')} />
    </Route>
  </Routes>
);
