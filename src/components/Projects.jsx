import { useInView } from '../hooks';
import projects from '../data/projectsList';
import { FaAppStoreIos, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section
      id='projects'
      className='projects section section--projects'
      ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <h2 className='projects__heading'>Selected work.</h2>
        <p className='projects__intro'>Apps, experiments, and ideas brought to life.</p>

        <div className='projects__featured'>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`featured-project${index % 2 !== 0 ? ' featured-project--reverse' : ''}`}>
              {project.image ? (
                <a
                  className='featured-project__image-wrapper'
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${project.title}`}>
                  <span className='featured-project__image-viewport'>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className='featured-project__image'
                      loading='lazy'
                      decoding='async'
                    />
                  </span>
                </a>
              ) : null}
              <div className='featured-project__content'>
                <p className='featured-project__overline'>{project.category || 'Web project'}</p>
                <h3 className='featured-project__title'>{project.title}</h3>
                <div className='featured-project__description'>
                  <p>{project.description}</p>
                </div>
                <div className='featured-project__tags'>
                  {project.techTags.map(tag => (
                    <span key={tag} className='featured-project__tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='featured-project__links'>
                  {project.appStore ? (
                    <a
                      href={project.appStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${project.title} on the App Store`}>
                      <FaAppStoreIos aria-hidden='true' />
                      <span>App Store</span>
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${project.title} GitHub repository`}>
                      <FaGithub aria-hidden='true' />
                      <span>Source code</span>
                    </a>
                  ) : null}
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${project.title} live site`}>
                    <span>Visit site</span>
                    <FaExternalLinkAlt aria-hidden='true' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
