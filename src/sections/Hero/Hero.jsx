import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Me"
        />
        <img
          className={styles.colourMode}
          src={themeIcon}
          alt="Light mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>
          Nathan
          <br />
          Puma
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/pumaoce" target="_blank">
            <img src={twitterIcon} alt="Twitter icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-puma-4413b216a"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linked In icon"></img>
          </a>
          <a href="https://github.com/nathanpuma" target="_blank">
            <img src={githubIcon} alt="Github icon"></img>
          </a>
        </span>
        <p className="description">Hello mate i will fix this later</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
