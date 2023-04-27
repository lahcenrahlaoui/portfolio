import Project from "./Project";

import funfolio from "../images/funfolio.png";
import gallery_images from "../images/gallery_ images.png";
import quizathon from "../images/quizathon.png";
import portfolio from "../images/portfolio.png";

const Projects = ({ theme }) => {
    const projects = [
        {
            name: "FunFolio",
            img:  funfolio ,
        },
        {
            name: "Gallery images",
            img:  gallery_images ,
        },
        {
            name: "Quizathon",
            img:  quizathon ,
        },
        {
            name: "Portfolio",
            img:  portfolio ,
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

