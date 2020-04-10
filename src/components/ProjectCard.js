import React from "react";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ project }) => {
	const history = useHistory();

	return (
		<div
			className={`project-card${project.completed ? " completed" : ""}`}
			onClick={() => history.push(`/projects/${project.id}`)}
		>
			<h2>{project.name}</h2>
		</div>
	);
};

export default ProjectCard;
