import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    image: '/projects/portfolio.jpg',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    image: '/projects/ecommerce.jpg',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Landing Page',
    image: '/projects/landing.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Chat App',
    image: '/projects/chat.jpg',
    tech: ['Node.js', 'Socket.io', 'React'],
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Мои проекты</h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm text-[var(--text-secondary)]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent-dark)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="inline-block bg-[var(--accent)] text-[var(--text)] px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Все проекты
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
