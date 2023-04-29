import Project from "./Project";

import funfolio from "../images/funfolio.png";
import gallery_images from "../images/gallery_ images.png";
import quizathon from "../images/quizathon.png";
import portfolio from "../images/portfolio.png";

const Projects = ({ theme }) => {
    const projects = [
        {
            name: "FunFolio",
            img: funfolio,
            link:"https://lahcenrahlaoui.github.io/rawg-games"
        },
        {
            name: "Gallery images",
            img: gallery_images,
            link:"https://lahcenrahlaoui.github.io/fakeUsers"
        },
        {
            name: "Quizathon",
            img: quizathon,
            link:"https://lahcenrahlaoui.github.io/quiz-game"
        },
        {
            name: "Portfolio",
            img: portfolio,
            link:"https://lahcenrahlaoui.github.io/portfolio"
        },
    ];
    const renderedProjects = projects.map((project) => {
        return (
            <Project
                key={project.name}
                link={project.link}
                project={project.name}
                img={project.img}
                theme={theme}
            />
        );
    });


    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <div className="flex flex-col justify-center  items-center gap-8 py-20">
            <div className="text-4xl">Projects</div>
            <div id="Projects" className="grid grid-cols-2 gap-8 transition-all duration-1000	 px-4 py-2 sm:px-20 sm:py-16 md:px-36 md:py-32">{renderedProjects}</div>
        </div>
    );
};

export default Projects;
