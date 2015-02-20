var React = require('react');
var Stories = require('./stories');

module.exports = React.createClass({
  displayName: 'PopularStories',

  render: function () {
    return <Stories url="/stories"></Stories>;
  }
});
