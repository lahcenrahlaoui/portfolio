const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-4 h-full px-20 lg:py-[2%]">
            <div className="grid   justify-center items-center ">
                <div>
                    <div className="text-4xl mb-8 font-bold ">
                        Hey there,I am LAHCEN
                    </div>
                    <div className="text-2xl  mb-20">
                        A Full-Stack Developer <br />& Design Enthusiast
                    </div>
                    <button className="  px-6 py-3 bg-btn-yellow text-lg font-semibold">
                        Download CV
                    </button>
                </div>
            </div>
            <img
                src="https://images.business.com/app/uploads/2019/05/05125715/Video-game-developer.png"
                className=" flex justify-center items-center"
            />
        </div>
    );
};

export default Hero;
