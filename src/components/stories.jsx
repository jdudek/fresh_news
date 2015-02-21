var React = require('react');
var jQuery = require('jquery');
var Story = require('./story');
var Bootstrap = require('react-bootstrap');

var API_HOST = 'https://fierce-gorge-1132.herokuapp.com';

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
    jQuery.get(API_HOST + this.props.url).done(function (data) {
      if (this.isMounted()) {
        this.setState({ stories: data });
      }
    }.bind(this));
  }
});
