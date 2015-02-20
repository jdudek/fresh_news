var React = require('react');
var Story = require('./story');
var jQuery = require('jquery');

module.exports = React.createClass({
  displayName: 'Stories',

  getInitialState: function () {
    return { stories: [] };
  },

  render: function () {
    return (
      <div>
        {this.state.stories.map(function (story) {
          return <Story {...story} key={story.id}></Story>;
        })}
      </div>
    )
  },

  componentDidMount: function () {
    jQuery.get('http://localhost:9292/stories').done(function (data) {
      if (this.isMounted()) {
        this.setState({ stories: data });
      }
    }.bind(this));
  }
});
