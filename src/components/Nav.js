import { DarkModeSwitch } from "react-toggle-dark-mode";

import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

import { Link } from "react-scroll";

const Nav = ({ onClick, theme }) => {
    const navList = ["Projects", "About", "Contact"];

    const navListRendered = navList.map((item, idx) => {
        return (
            <li key={idx} className="cursor-pointer p-6 hover:text-slate-400">
                <Link activeClass="active" smooth spy to={item}>
                    {item}{" "}
                </Link>
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

    const fadeInDownClasses = `flex justify-around w-3/5 `;

    const unorderedListClasses = `  flex 
                                    text-lg
                                    font-medium
                                    h-full
                                    flex
                                    items-center
                                    justify-around
                                    `;

    return (
        <div className="flex justify-center">
            <FadeInDownNav className={fadeInDownClasses}>
                <h1 className=" flex items-center justify-center text-2xl">
                    PORTFOLIO
                </h1>
                <ul className={unorderedListClasses}>{navListRendered}</ul>
                <div className=" flex items-center justify-center">
                    <DarkModeSwitch
                        checked={!theme}
                        onChange={handleClick}
                        size={30}
                    />
                </div>
            </FadeInDownNav>
        </div>
    );
};

export default Nav;
