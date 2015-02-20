var React = require('react')
var Bootstrap = require('react-bootstrap');

module.exports = React.createClass({
  displayName: 'Story',

  render: function () {
    return (
      <Bootstrap.ListGroupItem href={this.props.url} header={this.props.title}>
        <Bootstrap.Badge>{this.props.score}</Bootstrap.Badge>
        {' '}
        {this.props.url}
      </Bootstrap.ListGroupItem>
    );
  }
});
