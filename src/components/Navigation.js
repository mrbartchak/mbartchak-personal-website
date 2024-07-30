import React from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="nav-left">
				<span className="nav-name">Matthew Bartchak</span>
			</div>
			<div className="nav-right">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/resume">Resume</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
