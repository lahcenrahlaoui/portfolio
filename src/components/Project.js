const Project = ({ img, project, link }) => {
    return (
        <div className="mb-4 shadow-2xl">
            <a href={link}>
                <div className="relative  overflow-hidden bg-cover bg-no-repeat bg-gray-200   ">
                    <img
                        src={img}
                        className="w-full h-full object-fill p-px "
                        alt=""
                    />
                    <div className="absolute flex justify-center items-center text-black cursor-pointer inset-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80">
                        {project}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;
