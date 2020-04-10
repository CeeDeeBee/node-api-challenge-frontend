import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/api/projects")
			.then((res) => setProjects(res.data));
	}, []);

	return (
		<div className="projects-list">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default ProjectsList;
