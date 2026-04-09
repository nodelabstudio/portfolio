import { useState } from 'react';
import { useInView } from '../hooks';
import projects from '../data/projectsList';
import { FaGithub, FaExternalLinkAlt, FaRegFolder } from 'react-icons/fa';

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const allTags = [...new Set(others.flatMap((p) => p.techTags))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, isInView] = useInView();

  const filtered =
    activeFilter === 'All'
      ? others
      : others.filter((p) => p.techTags.includes(activeFilter));

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <p className="section-label">03 // PROJECTS</p>

        {/* Featured Projects */}
        <div className="projects__featured">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className={`featured-project${index % 2 !== 0 ? ' featured-project--reverse' : ''}`}
            >
              <div className="featured-project__image-wrapper">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="featured-project__image"
                  loading="lazy"
                />
              </div>
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>
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

        {/* Other Noteworthy Projects */}
        <h3 className="projects__other-heading">Other Noteworthy Projects</h3>

        <div className="projects__filter">
          <button
            className={`projects__filter-btn${activeFilter === 'All' ? ' projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`projects__filter-btn${activeFilter === tag ? ' projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__header">
                <FaRegFolder className="project-card__icon" />
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub />
                  </a>
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
              <h4 className="project-card__title">{project.title}</h4>
              <p className="project-card__desc">{project.shortDescription}</p>
              <div className="project-card__tags">
                {project.techTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
