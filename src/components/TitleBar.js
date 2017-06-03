import React, { Component } from 'react';

class TitleBar extends Component {
	render() {
		return (
			<h1> { this.props.title } </h1>
			);
	}
}

export default TitleBar