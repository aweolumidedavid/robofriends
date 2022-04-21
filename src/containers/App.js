import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { robots } from "../robots";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchTerm: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChangeEvent = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		const { robots, searchTerm } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name
				.toLocaleLowerCase()
				.includes(searchTerm.toLocaleLowerCase());
		});

		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChangeEvent} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
