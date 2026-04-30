import { useInView } from '../hooks';
import projects from '../data/projectsList';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="projects section section--projects" ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <p className="section-label">04 // PROJECTS</p>

        <div className="projects__featured">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`featured-project${index % 2 !== 0 ? ' featured-project--reverse' : ''}`}
            >
              {project.image && (
                <div className="featured-project__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="featured-project__image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="featured-project__content">
                <p className="featured-project__overline">Featured Project</p>
                <h3 className="featured-project__title">{project.title}</h3>
                <div className="featured-project__description">
                  <p>{project.description}</p>
                </div>
                <div className="featured-project__tags">
                  {project.techTags.map((tag) => (
                    <span key={tag} className="featured-project__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="featured-project__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FaGithub />
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
