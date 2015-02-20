var React = require('react');
var Bootstrap = require('react-bootstrap');
var RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div className="container">
        <h1 className="page-header">FreshNews</h1>
        <Bootstrap.Navbar>
          <Bootstrap.Nav bsStyle="pills">
            <Bootstrap.NavItem href="#/popular">Popular</Bootstrap.NavItem>
            <Bootstrap.NavItem href="#/recent">Recent</Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Navbar>
        <RouteHandler/>
      </div>
    );
  }
});
