import React, { Component } from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Contact from './contact'
import './about.css'


const About = () => {
  return (
	<div className="about">
	<h1>About Pokemons Web Site</h1>
	<div className="paragraph">
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error nulla laudantium rerum, blanditiis accusamus molestias earum rem unde placeat quisquam libero, molestiae, quo necessitatibus animi cupiditate consectetur veritatis debitis magnam tempore nobis eius dolor voluptates. Sit, doloremque aliquid! Vel, voluptas eveniet. Nobis, deserunt consequuntur eius eaque quaerat neque cupiditateLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error nulla laudantium rerum, blanditiis accusamus molestias earum rem unde placeat quisquam libero, molestiae, quo necessitatibus animi cupiditate consectetur veritatis debitis magnam tempore nobis eius dolor voluptates. Sit, doloremque aliquid! Vel, voluptas eveniet. Nobis, deserunt consequuntur eius eaque quaerat neque cupiditate.</p>
	</div>
			<p>We hope that you pass interesting time in out webbsid</p>
	<Link to="/about/contact">Contact Us</Link>
	<Routes>
		<Route path="/about/contact" element={<Contact/>}/>

	</Routes>
</div>
  );
}

export default About
