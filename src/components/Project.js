const Project = ({ img, project, theme }) => {
    return (
        <div
            className={` ${
                !theme ? "bg-gray-400 text-black" : ""
            } cursor-pointer h-96 w-80 overflow-hidden rounded-xl shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] transition duration-200 hover:scale-105`}
        >
            <img
                src={img}
                style={{
                    minWidth: "100%",
                    minHeight: "70%",
                    maxWidth: "100%",
                    maxHeight: "70%",
                }}
            />
            <div className=" text-center text-2xl text-bold py-9  ">
                {project}
            </div>
        </div>
    );
};

export default Project;
