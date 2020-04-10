import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div className={`project-card ${project.completed && "completed"}`}>
			<h2>{project.name}</h2>
		</div>
	);
};

export default ProjectCard;
