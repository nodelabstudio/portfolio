import { useInView } from '../hooks';
import img from '../assets/images/x-profile.png';

const toolkit = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Python', 'Django'],
  Tools: ['Git', 'Vite', 'Webpack', 'Jest'],
  APIs: ['Google Maps', 'HERE Maps', 'Cloudinary'],
  Infrastructure: ['Cloudflare', 'Railway'],
};

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id='about' className='about section section--about' ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <p className='section-label'>01 // ABOUT</p>
        <div className='about__grid'>
          <div className='about__photo-wrapper'>
            <img
              src={img}
              alt='Angel Rodriguez'
              className='about__photo'
              loading='lazy'
            />
          </div>
          <div className='about__bio'>
            <p>
              I&apos;ve been building software professionally for over 7 years,
              mostly focused on internal tools, mapping systems, and workflow
              automation. I like taking messy business problems and turning them
              into clean, reliable applications that people actually want to
              use.
            </p>
            <p>
              Most of my work has been on the enterprise side: interactive
              mapping platforms for sales teams, automated workflows that
              replaced hours of manual effort, and API integrations that
              connected the dots between disconnected systems. My go-to stack is
              React and JavaScript on the frontend, Python and Django on the
              backend. I care a lot about performance and making things
              accessible.
            </p>
          </div>
        </div>
        <div className='about__toolkit'>
          {Object.entries(toolkit).map(([category, skills]) => (
            <div key={category} className='about__toolkit-category'>
              <h4 className='about__toolkit-label'>{category}</h4>
              <div className='about__toolkit-tags'>
                {skills.map(skill => (
                  <span key={skill} className='about__tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
