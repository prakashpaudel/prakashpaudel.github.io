import React, { PropTypes } from 'react'

const ProjectItem = ( { img, title, description, url } ) => {
	return (
		<div className="project-item">
			<a href={url} target="_blank"><img className="project-img" src={img} /></a>
			<div className="project-text-block">
				<h2 className="heading">{title}</h2>
				<p className="subheading">{description}</p>
				<a href={url} target="_blank" className="btn btn-success">Visit site</a>
			</div>
		</div>
	)
}

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default ProjectItem