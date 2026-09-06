import { useInView } from '../hooks';

const blocks = [
  {
    id: 'hermes',
    label: 'Agent Framework',
    title: 'Hermes Agent',
    body: 'I use Hermes to build products, research opportunities, create marketing assets, measure growth, and automate Prayer Flip workflows and distribution. Specialized agents connect tools, preserve context, and verify results from idea through operation. I retain authority over consequential actions, spending, and publication.',
    tags: [
      'Hermes',
      'Prayer Flip',
      'Workflow Automation',
      'Marketing',
      'Agent Systems',
    ],
  },
  {
    id: 'openclaw',
    label: 'Past Exploration',
    title: 'OpenClaw',
    body: 'I experimented with OpenClaw, a local agent environment I ran on WSL/Ubuntu for files, memory, scheduled jobs, workspaces, and plugins. I used it to build pipelines for website development and marketing workflows, and to support a local Mission Control dashboard for tasks, content planning, and session history.',
    tags: ['OpenClaw', 'WSL/Ubuntu', 'Cron', 'Workspaces', 'Mission Control'],
  },
  {
    id: 'pipeline',
    label: 'Publishing Experiment',
    title: 'Image Generation & Social Publishing',
    body: 'I built a pipeline that paired Hermes research and drafting with image generation through a Node.js CLI and Puter.js, then publishing through a self-hosted Postiz instance. It supported Signal & Circuit distribution across X, TikTok, and Instagram. The publication is paused for now, with the option to revisit it.',
    tags: ['Puter.js', 'Postiz', 'X', 'TikTok', 'Instagram', 'Self-Hosted'],
  },
  {
    id: 'skills',
    label: 'Tooling & Skills',
    title: 'Building with Codex CLI',
    body: 'Codex CLI is my primary development environment for building apps, websites, and internal tools. I use reusable skills and project instructions to carry work from a clear specification through implementation, testing, security review, and release preparation, with focused changes and verification built into the process.',
    tags: ['Codex CLI', 'Skills', 'Project Instructions', 'Verification'],
  },
];

export default function AIWork() {
  const [ref, isInView] = useInView();

  return (
    <section
      id='ai-work'
      className='ai-work section section--ai-work'
      ref={ref}>
      <div className={`fade-in${isInView ? ' visible' : ''}`}>
        <h2 className='section-label'>Working with AI.</h2>
        <p className='ai-work__intro'>
          I use agents to turn ideas into working products and repeatable
          workflows, with much of that work focused on Prayer Flip. These are
          the tools I use today and the experiments that shaped my approach.
        </p>
        <div className='ai-work__grid'>
          {blocks.map(block => (
            <article key={block.id} className='ai-work__card'>
              <p className='ai-work__card-label'>{block.label}</p>
              <h3 className='ai-work__card-title'>{block.title}</h3>
              <p className='ai-work__card-body'>{block.body}</p>
              <div className='ai-work__card-tags'>
                {block.tags.map(tag => (
                  <span key={tag} className='ai-work__card-tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
