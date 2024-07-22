import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import sereneHaven from "../../assets/serene-haven.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sereneHaven}
          githubLink={"https://github.com/nathanpuma/serene-haven"}
          websiteLink={"https://serene-haven.vercel.app"}
          h3={"Serene Haven"}
          p={
            "A cabin renting website for people to discover the beautiful nature of woods and lakes located in the heart of Sweden. The project was built on React and Next.js, and finally deployed on Vercel."
          }
        />
        <ProjectCard
          src={viberr}
          githubLink={"https://github.com/nathanpuma/TankWars"}
          demoLink={"https://www.youtube.com/watch?v=EXEc0Q45SMo"}
          h3={"2D Tank Wars"}
          p={
            "A 2D array game where 4 players can fight it out on three different levels. Each level has a new environment, where the winner is crowned after the 3rd level. The game was made using Java, the processing library and Gradle."
          }
        />
        <ProjectCard
          src={viberr}
          link={"https://github.com/nathanpuma/serene-haven"}
          h3={"Serene Haven"}
          p={
            "Cabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting websiteCabin renting website"
          }
        />
      </div>
    </section>
  );
}

export default Projects;
