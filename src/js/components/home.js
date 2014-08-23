/** @jsx React.DOM */

var React = require('react');

var Home = React.createClass({
  render: function() {
    var tooling = [
      {id: 1, text: 'Browserify-shim'},
      {id: 2, text: 'Browserify / Watchify'},
      {id: 3, text: 'React (via Reactify transforms)'},
      {id: 4, text: 'Compass'},
      {id: 5, text: 'SASS'},
      {id: 6, text: 'Image optimization'},
      {id: 7, text: 'LiveReload'},
      {id: 8, text: 'Non common-js jquery plugin'},
      {id: 9, text: 'Npm jquery'},
      {id: 10, text: 'Npm react'},
      {id: 11, text: 'Npm es6'},
      {id: 12, text: 'Jest for testing'}
    ];

    var toolingList = tooling.map(function(tool, i) {
      return <li key={tool.id}>{tool.id}. {tool.text}</li>;
    });

    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <p>So as you can see here we have a listing of stuff</p>
        <ul> {toolingList} </ul>
      </article>
    );
  }
});

module.exports = Home;
