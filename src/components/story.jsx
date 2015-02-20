var React = require('react')

module.exports = React.createClass({
  displayName: 'Story',

  render: function () {
    return (
      <h4>
        <a href={this.props.url}>{this.props.title}</a>
        <small>{this.props.url}</small>
      </h4>
    );
  }
});
