import React, { PropTypes } from 'react'

const ProjectItem = ( { img, title, description, url } ) => {
	return (
		<div className="project-item">
			<a href={url}>
				<div className="project-item-inner">
					<img className="project-img" src={img} />
					<div className="project-item-text">
						<div className="project-item-text-inner">
							<h4 className="title">{title}</h4>
							{/*<a href={url} target="_blank" className="btn btn-success">Visit site</a>*/}
						</div>
					</div>
				</div>
			</a>
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