var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./Component.jsx');

var props = window.props;

ReactDOM.render(
	React.createElement(Component, props), document
);

