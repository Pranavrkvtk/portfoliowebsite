import "./Projects.css";

function Projects() {
const projects = [
  {
    title: "AutoCare 360",
    desc: "ERP system for automobile service management",
    link: "https://www.gjglobalsoft.com/solutions/autocare360",
    type: "Company",
    company: "GJ Global",
  },
  {
    title: "Asset Pro",
    desc: "Asset lifecycle and inventory management system",
    link: "https://www.gjglobalsoft.com/solutions/assetpro",
    type: "Company",
    company: "GJ Global",
  },
  {
    title: "GJ Edu",
    desc: "Education Management System for schools & colleges",
    link: "https://www.gjglobalsoft.com/solutions/gj-edu",
    type: "Company",
    company: "GJ Global",
  },
  {
    title: "ParkEZY",
    desc: "Smart parking system with real-time tracking & payments",
    link: "https://www.gjglobalsoft.com/solutions/parkezy",
    type: "Company",
    company: "GJ Global",
  },
  {
    title: "Deepthigas Web App",
    desc: "Full-stack freelance product built with Java + React",
    link: "https://deepthigas-reactjs.vercel.app/",
    type: "Freelance",
  },
];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* 🔥 TYPE BADGE */}
            <div className={`project-badge ${project.type.toLowerCase()}`}>
              {project.type}
            </div>

            <h3>{project.title}</h3>

            {/* Company Name */}
            {project.company && (
              <p className="project-company">
                {project.company}
              </p>
            )}

            <p>{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project 🚀
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;