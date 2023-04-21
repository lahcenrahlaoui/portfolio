import Project from "./Project";

const Projects = ({ theme }) => {
    const projects = [
        {
            name: "first",
            img: "https://i.ibb.co/j5cch4S/i.png",
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
            <div className="flex justify-center items-center ">
                <div
                    className="
                                px-36 
                                py-12 
                                grid 
                                grid-rows-[400px_minmax(100px,_1fr)]
                                grid-cols-1
                                sm:grid-cols-1
                                md:grid-cols-2 
                                lg:grid-cols-3  
                                gap-10  "
                >
                    {renderedProjects}
                </div>
            </div>
        </div>
    );
};

export default Projects;

// px-36
//                                 py-12
//                                 grid
//                                 grid-rows-[400px_minmax(100px,_1fr)]
//                                 grid-cols-3
//                                 sm:grid-cols-1
//                                 md:grid-cols-3
//                                 lg:grid-cols-3
//                                 gap-10
