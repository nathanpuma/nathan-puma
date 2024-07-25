import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import sereneHaven from "../../assets/serene-haven.png";
import frierenImage from "../../assets/frieren.png";
import tank from "../../assets/tank.png";

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
            "Serene Haven is a beautifully crafted web application that serves as a serene retreat booking platform, similar to Airbnb. Developed with React and Next.js, this site offers users a seamless experience in browsing and booking peaceful cabins and retreats. The clean and elegant design enhances user engagement, while the robust backend ensures smooth operation. Deployed on Vercel, Serene Haven delivers fast and reliable performance, making it the perfect destination for anyone seeking tranquility and relaxation."
          }
        />
        <ProjectCard
          src={tank}
          githubLink={"https://github.com/nathanpuma/TankWars"}
          demoLink={"https://www.youtube.com/watch?v=EXEc0Q45SMo"}
          h3={"2D Tank Wars"}
          p={
            "Tank Wars is 2D tank game developed using Java, the Processing library, and Gradle. The game is made up of 4 players each with their own unique tank. Each tank competes in turn-based combat, displaying health, fuel, and parachute status. With consistent tank colors and intricate mechanics for movement, collisions, and explosions, Tank Wars is a great game you can play with your friends. Developed as part of an OOP course, the game includes mathematical functions for projectiles and JUnit for testing."
          }
        />
        <ProjectCard
          src={frierenImage}
          githubLink={"https://github.com/nathanpuma/anime-treasury"}
          websiteLink={"https://animetreasury.vercel.app/"}
          h3={"Anime Treasury"}
          p={
            "Anime Treasury is a comprehensive web application designed to provide anime enthusiasts with a rich and engaging experience. Built using React and Next.js, this platform features a vast collection of anime series, number of episodes, and user reviews. The intuitive and visually appealing interface ensures seamless navigation, while the integration of Vercel for deployment guarantees fast and reliable performance."
          }
        />
      </div>
    </section>
  );
}

export default Projects;
