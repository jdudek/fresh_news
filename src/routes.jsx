var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var App = require('./components/app');
var PopularStories = require('./components/popular_stories');
var RecentStories = require('./components/recent_stories');

module.exports = (
  <Route handler={App}>
    <Route name="popular" handler={PopularStories}/>
    <Route name="recent" handler={RecentStories}/>
    <Redirect from="" to="popular" />
  </Route>
);
