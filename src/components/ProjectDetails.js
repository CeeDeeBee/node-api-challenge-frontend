import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
	const { id } = useParams();
	const [project, setProject] = useState({ actions: [] });

	useEffect(() => {
		axios
			.get(`http://localhost:4000/api/projects/${id}`)
			.then((res) => setProject(res.data));
	}, [id]);

	return (
		<div className="project-details">
			<Link to="/">All Projects</Link>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			<p>Completed: {`${project.completed}`}</p>
			<h3>Actions</h3>
			{project.actions.map((action) => (
				<div key={action.id} className="action">
					<h4>{action.description}</h4>
					<p>{action.notes}</p>
				</div>
			))}
		</div>
	);
};

export default ProjectDetails;
