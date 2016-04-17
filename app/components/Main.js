import React from 'react'
import ProjectItem from './ProjectItem'

const projects = [
	{
		title: "LumenEd",
		img: "/assets/img/lumened-home.png",
		url: "http://lumened.org",
		description: "This is the fourth iteration of a website I've built for LumenEd. This version was built using Yii, a PHP MVC framework as the foundation. The frontend also includes Bootstrap, JQuery, other related libraries and a bunch of custom HTML/CSS/JS."
	},
	{
		title: "Weather App",
		img: "/assets/img/weather-app.png",
		url: "http://t0tal.github.com/weather-app",
		description: "This was a just-for-fun project I made to learn React, a JS library that is amazing for building web applications. Weather Worldwide is a single-page web app that uses the OpenWeather API to show the daily and 5 day forecast for anywhere in the world."
	},
	{
		title: "Video Pen Pals",
		img: "/assets/img/vpp.png",
		url: "http://lumened.org/login",
		description: "Video Pen Pals is a platform for connecting classrooms across the world through video. It's a fully featured Web App with video sharing, messaging, notifications and user management. It's built with PHP, MySQL, HTML, CSS(LESS), JS, WebSocket, Bootstrap, and other related tools. You can check it out using a guest account: lumened.guest@gmail.com - password: guest"
	}
]

const Main = () => {
		return (
			<div className="main-container container-fluid">
					<div className="section header-section row">
							<img src="/assets/img/pp.jpg" className="profile-pic img-circle" />
							<h1 className="heading">Prakash's Portfolio</h1>
							<p className="subheading text-center">Hey, I'm a frontend developer based in Chicago<br/> who loves building things for the web.</p>
							<div className="social-links">
								<a href="http://github.com/t0tal" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
								<a href="http://linkedin.com/in/ppaudel" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
								<a href="mailto:total.prakash@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
							</div>
					</div>
					<div className="section portfolio-section row">
						{/*<h1 className="heading">Recent Projects</h1>
						<p className="subheading">These are some of my recent projects. A mix of personal, freelance and just-for-fun work</p>*/}
						{ projects.map(project =>
							<ProjectItem key={project.title} {...project} />
						)}
					</div>
					<footer className="footer row">
						<p><i className="fa fa-copyright" aria-hidden="true"></i> {(new Date()).getFullYear()} Prakash Paudel</p>
						<p>Made with <i className="fa fa-heart" aria-hidden="true"></i> in Chicago</p>
					</footer>
			</div>
		)
}

export default Main