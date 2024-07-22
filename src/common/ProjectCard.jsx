import PropTypes from "prop-types";

function ProjectCard({ src, githubLink, websiteLink, demoLink, h3, p }) {
  return (
    <div className="projectCard">
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {githubLink && (websiteLink || demoLink) && " | "}
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
        {websiteLink && demoLink && " | "}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </p>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  websiteLink: PropTypes.string,
  demoLink: PropTypes.string,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  githubLink: null,
  websiteLink: null,
  demoLink: null,
};

export default ProjectCard;
