var React = require('react');
var Bootstrap = require('react-bootstrap');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'Menu',
  mixins: [Router.State, Router.Navigation],

  render: function () {
    return (
      <Bootstrap.Navbar>
        <Bootstrap.Nav bsStyle="pills">
          <Bootstrap.NavItem
            href={this.makeHref('popular')}
            active={this.isActive('popular')}
            >Popular</Bootstrap.NavItem>
          <Bootstrap.NavItem
            href={this.makeHref('recent')}
            active={this.isActive('recent')}
            >Recent</Bootstrap.NavItem>
        </Bootstrap.Nav>
      </Bootstrap.Navbar>
    );
  }
});
