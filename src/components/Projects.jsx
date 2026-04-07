import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AutoCare 360",
      desc: "ERP system with Spring Boot + React + PostgreSQL",
    },
    {
      title: "Asset Pro",
      desc: "Asset lifecycle management system",
    },
    {
      title: "Deepthigas Web App",
      desc: "Full-stack product built with Java + React",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;