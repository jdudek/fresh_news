var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

window.React = React;

Router.run(Routes, function (Handler) {
  React.render(React.createElement(Handler), document.body);
});
