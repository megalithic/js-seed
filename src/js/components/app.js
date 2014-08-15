/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h1>JS-Seed</h1>
        <nav>
          <ul>
            <li><Link to="welcome">Welcome</Link></li>
            <li><Link to="goodbye">Goodbye</Link></li>
          </ul>
        </nav>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

module.exports = App;
