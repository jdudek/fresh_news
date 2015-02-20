var React = require('react');
var jQuery = require('jquery');
var Story = require('./story');
var Bootstrap = require('react-bootstrap');

module.exports = React.createClass({
  displayName: 'Stories',

  getInitialState: function () {
    return { stories: [] };
  },

  render: function () {
    return (
      <Bootstrap.ListGroup>
        {this.state.stories.map(function (story) {
          return <Story {...story} key={story.id}></Story>;
        })}
      </Bootstrap.ListGroup>
    )
  },

  componentDidMount: function () {
    jQuery.get('http://localhost:9292' + this.props.url).done(function (data) {
      if (this.isMounted()) {
        this.setState({ stories: data });
      }
    }.bind(this));
  }
});
