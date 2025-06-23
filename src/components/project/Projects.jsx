import { ProjectsData } from '../Data';
import Title from '../Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full xl:px-16 px-8 py-6 bg-gradient-to-br from-[#fef3f3] via-[#f6e9ff] to-[#e6fbfc] transition-all duration-500"
    >
      <div className="flex justify-center items-center text-center mb-">
        <Title title="My Projects" des="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mb-8">
        {ProjectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            des={project.description}
            src={project.img}
            github={project.github}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
