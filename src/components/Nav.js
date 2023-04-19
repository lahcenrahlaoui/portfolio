const Nav = () => {
    return (
        <nav className=" grid  grid-cols-4 gap-4  mx-40 h-24  ">
            <h1 className="flex items-center justify-center text-2xl ">
                PORTFOLIO
            </h1>
            <ul className="col-span-2 flex  lg:px-[22%] sm:px-[5%]  text-lg font-medium	h-full items-center justify-between ">
                <li className="cursor-pointer" >
                    <a href="#" /> Projects
                </li>
                <li className="cursor-pointer" >
                    <a href="#" /> About
                </li>
                <li className="cursor-pointer" >
                    <a href="#" /> Contact
                </li>
            </ul>
            <div className=" flex items-center justify-center">
                <button className="border-2 border-black p-1 w-20 h-10">Click</button>
            </div>
        </nav>
    );
};

export default Nav;
