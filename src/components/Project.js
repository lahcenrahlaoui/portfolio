const Project = ({ img, project, theme }) => {
    console.log(img.gallery_images)
    return (
      
        <div
            className=" max-w-sm
                        max[500px]:w-80
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
                        {project}
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
