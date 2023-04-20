import { bounceIn, bounceOut, fadeInDown, fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

import { useState, useEffect } from "react";

const RightHero = () => {
    const [state, setState] = useState(fadeInDown);

    const bounceInAnimation = keyframes`${state}`;

    const BounceInImg = styled.img`
        animation: 2.2s ${bounceInAnimation};
    `;

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        setState(bounceOut);
    };

    return <img
    src="https://images.business.com/app/uploads/2019/05/05125715/Video-game-developer.png"
    className=" flex justify-center items-center"
/>;
};

export default RightHero;
