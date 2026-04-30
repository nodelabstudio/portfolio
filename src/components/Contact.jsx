import { useInView } from '../hooks';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section id='contact' className='contact section section--contact' ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <p className='section-label'>05 // CONTACT</p>
        <h2 className='contact__heading'>Get in Touch</h2>
        <p className='contact__text'>
          I&apos;m always up for hearing about new projects or opportunities.
          If you want to work together, have a question, or just want to
          connect, don&apos;t hesitate to reach out.
        </p>
        <a
          href='mailto:node@beachlife.email'
          className='btn btn--primary contact__cta'
        >
          Say Hello
        </a>
        <div className='contact__socials'>
          <a
            href='mailto:node@beachlife.email'
            aria-label='Email'
            rel='noreferrer'
          >
            <GoMail />
          </a>
          <a
            href='https://github.com/nodelabstudio'
            target='_blank'
            aria-label='GitHub'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
