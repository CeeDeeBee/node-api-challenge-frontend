import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
	const [projects, setProjects] = useState([]);

	return (
		<div className="projects-list">
			{projects.map((project) => (
				<ProjectCard project={project} />
			))}
		</div>
	);
};

export default ProjectsList;
