import Project from "./Project";

const Projects = () => {
    const projects = [
        {
            name: "first",
            img: "https://picsum.photos/id/1/320",
        },
        {
            name: "second",
            img: "https://picsum.photos/id/2/320",
        },
        {
            name: "third",
            img: "https://picsum.photos/id/3/320",
        },
        {
            name: "forth",
            img: "https://picsum.photos/id/4/320",
        },
        {
            name: "fifth",
            img: "https://picsum.photos/id/5/320",
        },
        {
            name: "sixth",
            img: "https://picsum.photos/id/6/320",
        },
    ];
    const renderedProjects = projects.map((project) => {
        return (
            <Project
                key={project.name}
                project={project.name}
                img={project.img}
            />
        );
    });

    return (
        <div className="flex flex-col justify-center items-center gap-8 py-20">
            <div className="text-4xl">Projects</div>
            <div className="flex justify-center items-center     ">
                <div className="grid grid-cols-3 gap-12 border  rounded-md p-4">
                    {renderedProjects}
                </div>
            </div>
        </div>
    );
};

export default Projects;
