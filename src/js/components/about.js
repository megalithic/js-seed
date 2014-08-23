/** @jsx React.DOM */

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <p>A little something something to talk about. foo</p>
      </article>
    );
  }
});

module.exports = About;
