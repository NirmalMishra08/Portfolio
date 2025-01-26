import { PROJECTS } from "../assets/Index";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Projects</h1>

            <div>
                {
                    PROJECTS.map((project, index) => {
                        return <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <img className="mb-6 rounded" src={project.image} width={150} height={150} alt={project.title} />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                                {
                                    project.technologies.map((tech, index) => {
                                        return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                            {tech}
                                        </span>;
                                    })
                                }
                            </div>

                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default Projects;