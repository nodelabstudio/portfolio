import { useInView } from '../hooks';

const blocks = [
  {
    id: 'hermes',
    label: 'Agent Operations',
    title: 'Hermes Agent',
    body: 'I run a self-hosted Hermes Agent system from Nous Research to coordinate research, software work, publishing, analytics, and operational monitoring. Specialized agent profiles handle writing, editing, research, marketing, and development, while reusable skills preserve proven workflows and corrections. Scheduled jobs work through files, terminals, browsers, web sources, and messaging channels such as Telegram and Discord. Human approval gates protect publishing and other consequential actions. Health checks, watchdogs, and fail-closed workflows keep the system observable and accountable.',
    tags: [
      'Hermes Agent',
      'Multi-Agent Profiles',
      'Persistent Memory',
      'Reusable Skills',
      'Scheduled Automation',
      'Human Approval',
      'Self-Hosted',
    ],
  },
  {
    id: 'openclaw',
    label: 'Local Agent Layer',
    title: 'OpenClaw',
    body: "Tinker time goes into OpenClaw, a local agent operating layer running on WSL/Ubuntu that gives an LLM a persistent environment of files, memory, scheduled jobs, workspaces, and plugins. I've used it to wire pipelines that automate website-building and marketing-app workflows, and it underpins a local Mission Control dashboard for tasks, content planning, and session history.",
    tags: ['OpenClaw', 'WSL/Ubuntu', 'Cron', 'Workspaces', 'Mission Control'],
  },
  {
    id: 'pipeline',
    label: 'Autonomous Pipeline',
    title: 'Image Generation & Social Auto-Publishing',
    body: "A fully-built, self-running pipeline that generates editorial illustrations and auto-posts to X, TikTok, and Instagram. The image side started as a Node.js CLI routing through Puter.js after Gemini's billing wall and Cloudflare SDXL's wrong-style outputs forced a workaround; the publishing side runs on a self-hosted Postiz install. Hermes-produced content from Signal & Circuit feeds in upstream, so the whole loop now runs on its own.",
    tags: ['Puter.js', 'Postiz', 'X', 'TikTok', 'Instagram', 'Self-Hosted'],
  },
  {
    id: 'skills',
    label: 'Tooling & Skills',
    title: 'Claude Code as a Build Surface',
    body: "Claude Code CLI is my default development environment, and I'm constantly building reusable Skills for AI automations, including a custom APP_BLUEPRINT.md skill that produces production-grade app specs before any code is written, and a global ~/.claude/CLAUDE.md enforcing four working principles: think before coding, simplicity first, surgical changes, goal-driven execution.",
    tags: ['Claude Code', 'Skills', 'Prompt Engineering', 'APP_BLUEPRINT'],
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
        <p className='section-label'>03 // AI WORK</p>
        <p className='ai-work__intro'>
          Most of my AI work is operator-focused. I wire agents and models into
          systems that actually ship: publish content, generate assets, and run
          unattended. The stack below is what I run day-to-day across personal
          projects and tooling.
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
