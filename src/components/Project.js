const Project = ({ img, project, theme }) => {
    return (
        // <div
        //     className={` ${
        //         !theme ? "bg-gray-400 text-black" : ""
        //     } cursor-pointer h-96 w-80 overflow-hidden rounded-xl
        // shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]
        //  transition duration-200 hover:scale-105`}
        // >
        //     <img
        //         src={img}
        //         style={{
        //             minWidth: "100%",
        //             minHeight: "70%",
        //             maxWidth: "100%",
        //             maxHeight: "70%",
        //         }}
        //     />
        //     <div className=" text-center text-2xl text-bold py-9  ">
        //         {project}
        //     </div>
        // </div>

        <div
            className=" max-w-sm    
                        bg-white
                        rounded-lg 
                        shadow 
                        cursor-pointer
                        overflow-hidden
                        flex flex-col
                       "
        >
            <div
                className=" h-3/5 
                            overflow-hidden 
                            border-b-2"
            >
                <img
                    className=" rounded-t-lg  
                                transition 
                                duration-700 
                                hover:scale-125
                                hover:-rotate-6
                                "
                    src={img}
                    alt=""
                    style={{
                        display: "block",
                        minWidth: "100%",
                        minHeight: "100%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5
                        className=" mb-2 
                                    text-2xl 
                                    font-bold 
                                    tracking-tight 
                                    text-gray-900 
                                    dark:text-white"
                    >
                        Project name
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    small description about this project and some talking about
                    it , and write something good about it
                </p>
            </div>
        </div>
    );
};

export default Project;
