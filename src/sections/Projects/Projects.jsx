import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'

function Projects() {
  return (
  <section id="projects" className={styles.container}>
  <h1 className='sectionTitle'>Projects</h1>
  <div className={styles.projectsContainer}>
    <a href="" target='_blank'>
        <img className='hover' src={viberr} alt=""></img>
        <h3>Viberr</h3>
        <p>Streaming App</p>
    </a>
  </div>
  </section>
  );
}

export default Projects