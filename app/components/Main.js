import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import Navbar from './Navbar'
import projects from '../projects'

class Main extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e){
		(document.body.scrollTop > 0) ? document.getElementById("main").classList.add("has-scrolled")
																	: document.getElementById("main").classList.remove("has-scrolled")
	}
	render() {
		return (
			<div id="main" className="main-container container-fluid">
				<div className="header row">
					<div className="header-main">
						<a href="mailto:total.prakash@gmail.com" target="_blank">Contact</a>
							<h1 className="heading">prakash paudel</h1>
						<a href="/assets/prakashpaudelresume.pdf" target="_blank">Resume</a>
					</div>
					<p className="subheading text-center">Front-End Developer</p>
					<div className="social-links">
						<a href="http://github.com/t0tal" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
						<a href="http://linkedin.com/in/ppaudel" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
						<a href="mailto:total.prakash@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="section-container row">
					<h3 className="heading">About</h3>
					<div className="section about-section">
						<img src="/assets/img/pp.jpg" className="profile-pic img-circle" />
						<p className="">Hey there! I'm a frontend developer based in Chicago. Until recently I was working on my own <a href="http://lumened.org" target="_blank">startup</a>. I graduated with honors from Oberlin College, Ohio in Math, Economics and CS. Today, I'm looking for opportunities to grow my frontend skills until my next startup adventure.</p>
					</div>
					<h3 className="heading">Work</h3>
					<div className="section portfolio-section">
						{ projects.map(project =>
							<ProjectItem key={project.title} {...project} />
						)}
					</div>
				</div>
				<footer className="footer row">
					<p><i className="fa fa-copyright" aria-hidden="true"></i> {(new Date()).getFullYear()} Prakash Paudel</p>
					<p>Made with <i className="fa fa-heart" aria-hidden="true"></i> in Chicago</p>
				</footer>
			</div>
		)
	}
}

export default Main