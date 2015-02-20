var React = require('react');
var Stories = require('./stories');
var Bootstrap = require('react-bootstrap');

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div className="container">
        <h1 className="page-header">FreshNews</h1>
        <Bootstrap.Navbar>
          <Bootstrap.Nav bsStyle="pills">
            <Bootstrap.NavItem>Popular</Bootstrap.NavItem>
            <Bootstrap.NavItem>Latest</Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Navbar>
        <Stories/>
      </div>
    );
  }
});
