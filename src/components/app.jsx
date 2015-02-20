var React = require('react');
var Stories = require('./stories');

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <h1>FreshNews</h1>
        <Stories/>
      </div>
    );
  }
});
