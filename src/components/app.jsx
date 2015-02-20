var React = require('react');
var Bootstrap = require('react-bootstrap');
var RouteHandler = require('react-router').RouteHandler;
var Menu = require('./menu');

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div className="container">
        <h1 className="page-header">FreshNews</h1>
        <Menu/>
        <RouteHandler/>
      </div>
    );
  }
});
