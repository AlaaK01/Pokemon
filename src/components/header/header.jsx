import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './header.css'

class Header extends Component {
	state = {  } 
	render() { 
		return (
			<div className="header">
				<h1>POKEMON <span>style</span></h1>
				<nav className="navbar">
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="./myTeam">My Team</NavLink>
					<NavLink to="./videos">Videos</NavLink>
					<NavLink to="./about">About us</NavLink>
					
				</nav>
			</div>
		);
	}
}
 
export default Header;