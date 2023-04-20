import Project from "./Project";

const Projects = ({theme}) => {
    const projects = [
        {
            name: "first",
            img: "https://www.greenofficemovement.org/wp-content/uploads/2020/10/Screenshot-2020-10-07-at-12.36.18-249x300.png",
        },
        {
            name: "second",
            img: "https://i-a.d-cd.net/4wWXO2kX2YkiHMbHKJIy-OzM1rM-1920.jpg",
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
                theme={theme}
            />
        );
    });

    return (
        <div className="flex flex-col justify-center items-center gap-8 py-20">
            <div className="text-4xl">Projects</div>
            <div className="flex justify-center items-center     ">
                <div className="grid md:grid-cols-3  grid-cols-1   gap-12    rounded-md p-4">
                    {renderedProjects}
                </div>
            </div>
        </div>
    );
};

export default Projects;
