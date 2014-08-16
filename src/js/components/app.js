/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var AuthStore = require('../stores/AuthStore');
var AuthActionCreators = require('../actions/AuthActionCreators');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

function getStateFromStores() {
  return {
    auth: AuthStore.get()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AuthStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  signIn: function() {
    AuthActionCreators.signIn();
  },

  logout: function() {
    AuthActionCreators.logout();
  },

  render: function () {
    var klass = 'container seed';
    if (this.state.auth.authenticated) {
      klass += ' seed--authenticated';
    }
    return (
      <div className={klass}>
        <h1>JS-Seed</h1>
        <nav>
          <ul>
            <li><Link to="welcome">Welcome</Link></li>
            <li><Link to="goodbye">Goodbye</Link></li>
          </ul>
        </nav>
        {this.renderRightNav()}

        {this.props.activeRouteHandler()}
      </div>
    );
  },
  renderRightNav: function() {
    return (this.state.auth.authenticated) ?
      <li><button onClick={this.logout}>Logout</button></li> :
      <li><button onClick={this.signIn}>Sign in</button></li>;
  }
});

module.exports = App;
