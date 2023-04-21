import { DarkModeSwitch } from "react-toggle-dark-mode";

import { bounceIn, fadeInDown, fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const Nav = ({ onClick, theme }) => {
    const navList = ["Projects", "About", "Contact"];
    const navRendered = navList.map((item, idx) => {
        return (
            <li key={idx} className="cursor-pointer hover:text-slate-400">
                <a href={`#${item}`}> {item} </a>
            </li>
        );
    });
    const handleClick = () => {
        onClick();
    };

    const fadeInDownAnimation = keyframes`${fadeInDown}`;
    const FadeInDownNav = styled.nav`
        animation: 1.2s ${fadeInDownAnimation};
    `;

    return (
        <FadeInDownNav className="  grid  
                                    grid-cols-1
                                    gap-4  
                                    mx-40 
                                    h-24 
                                    min-[560px]:grid-cols-4
                                    max-[560px]:h-72
                                    max-[560px]:mx-10
                                    ">

            <h1 className=" flex 
                            items-center 
                            justify-center 
                            text-2xl ">

                PORTFOLIO
            </h1>
            <ul className=" col-span-2 
                            lg:px-[22%] 
                            sm:px-[5%]  
                            text-lg 
                            font-medium	
                            h-full

                            flex  
                            items-center 
                            justify-between  
                            
                            max-[560px]:block"
                            >
                {navRendered}
            </ul>
            <div className=" flex 
                             items-center 
                             justify-center 
                             ml-10
                             max-[560px]:items-start
                             max-[560px]:justify-start
                             max-[560px]:ml-0
                             max-[560px]:-mt-10
                             "
                             >
                <DarkModeSwitch
                    checked={!theme}
                    onChange={handleClick}
                    size={30}
                />
            </div>
        </FadeInDownNav>
    );
};

export default Nav;
