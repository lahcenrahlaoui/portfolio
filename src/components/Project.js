const Project = ({ img, project }) => {
    return (
        <div className="cursor-pointer  rounded-lg shadow-[0px_1px_5px_1px_rgba(0,0,0,0.56)]">
            <img src={img} />
            <div className=" text-center text-2xl text-bold py-4">
                {project}
            </div>
        </div>
    );
};

export default Project;
