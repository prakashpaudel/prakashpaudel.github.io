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
					<h3 className="heading">Tools</h3>
					<div className="section tools-section">
						<div className="tool-item">
							<h5 className="tool-heading">HTML</h5>
							<p>I'm well versed in HTML5, including the canvas, multimedia tools and integration across browsers. All my projects use responsive design, primarily through <a href="http://getbootstrap.com">Twitter Bootstrap</a> and <a href="http://www.w3schools.com/css/css3_flexbox.asp">CSS3 Flexbox</a>.</p>
						</div>
						<div className="tool-item">
							<h5 className="tool-heading">CSS</h5>
							<p>For styling pages, I primarily use SASS, plain-old CSS, or LESS. I know the ins and outs of CSS3, including Flexbox (which is awesome!) and can flip Photoshop or Sketch mockups into beautiful webpages in an instant.</p>
						</div>
						<div className="tool-item">
							<h5 className="tool-heading">JavaScript</h5>
							<p>My Javascript library of choice is <a href="https://facebook.github.io/react">React.js</a>. It's modular component structure make it perfect for my workflow. I also regularly use JQuery, AJAX, Redux, React-Router, and a slew of other complementary libraries.</p>
						</div>
						<div className="tool-item">
							<h5 className="tool-heading">Others</h5>
							<p>I'm also experienced with PHP (including the Yii framework) and WordPress on the front-end. On the back-end, I'm familiar with Node.js, Express.js, LAMP, MySQL, and firebase.</p>
						</div>
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