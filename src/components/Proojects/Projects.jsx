import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import "./Projects.css";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="personImg" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};
const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((projects, ind) => {
          return (
            <ProjectCard
              url="https://www.linkedin.com/in/muhammad-fizan-iqbal/"
              projectImage="https://source.unsplash.com/user/c_v_r/1900x800"
              projectTitle="Sample Project"
              description="This is a sample project.... ..... ..... ......."
              technologies="Mongodb Express React Node"
            />
          );
        })}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        {" "}
        All the projects shown above are made by me 😊
      </Typography>
    </div>
  );
};

export default Projects;
