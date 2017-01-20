const React = require('react')

module.exports = React.createClass({
	handleClick: function() {
		alert()
	},
	render: function() {
		return(
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel='stylesheet' href='style.css' />
				</head>
				<body>
					<h1>{this.props.title}</h1>
					<h1>What the fuck</h1>
					<p>yea, what the fuck?</p>
					<button onClick={this.handleClick}>Click Me</button>
					<script dangerouslySetInnerHTML={{
						__html: 'window.props=' + JSON.stringify(this.props)
					}} />
					<script src='/bundle.js' />
				</body>
			</html>
		)
	}
});