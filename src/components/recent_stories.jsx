var React = require('react');
var Stories = require('./stories');

module.exports = React.createClass({
  displayName: 'RecentStories',

  render: function () {
    return <Stories url="/stories/recent"></Stories>;
  }
});
