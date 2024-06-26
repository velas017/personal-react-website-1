import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return  (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className={styles} 
        src={heroImg} 
        alt="Profile picture" 
        />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode Icon" />
    </div>
    <div className={styles.info}>
        <h1>
            Edar
            <br/>
            Velasquez
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
        </span>
        <p>With a passion for developing modern react web apps for commercial businesses</p>
        <a href={CV} download>
            <button className='hover' >
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero