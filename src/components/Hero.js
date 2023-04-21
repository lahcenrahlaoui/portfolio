/*

const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-4 h-full px-20 lg:py-[2%]">
            <div className="grid   justify-center items-center ">
                <div>
                    <div className="text-4xl mb-8 font-bold ">
                        Hey there, I am LAHCEN
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

*/

// import { bounceIn, fadeInDown, fadeInUp } from "react-animations";
// import styled, { keyframes   } from "styled-components";

// import { useState, useEffect } from "react";
// import RightHero from "./RightHero";

// const Hero = () => {

//     const fadeInUpAnimation = keyframes`${fadeInUp}`;
//     const fadeInDownAnimation = keyframes`${fadeInDown}`;

//     const FadeInUpButton = styled.button`
//         animation: 2s ${fadeInUpAnimation};
//     `;

//     const FadeInDownDiv = styled.div`
//         animation: 2s ${fadeInDownAnimation};
//         background: ${({ scrolled }) => scrolled > 100 ? "#f00000" : "#ffff00"};
//     `;

//     const FadeInDownSpanF = styled.span`
//         animation: 4s ${fadeInDownAnimation};
//     `;
//     const FadeInDownSpanS = styled.span`
//         animation: 6s ${fadeInDownAnimation};
//     `;

//     return (
//         <div className="grid grid-cols-2 gap-4 h-full px-20 lg:py-[2%]">
//             <div className="grid   justify-center items-center ">
//                 <div>
//                     <FadeInDownDiv
//                         className="text-4xl mb-8 font-bold "
//                     >
//                         Hey there, I am LAHCEN
//                     </FadeInDownDiv>
//                     <div className="text-2xl  mb-20">
//                         <FadeInDownSpanF>
//                             A Full-Stack Developer <br />
//                         </FadeInDownSpanF>
//                         <FadeInDownSpanS>& Design Enthusiast</FadeInDownSpanS>
//                     </div>
//                     <FadeInUpButton className=" px-6 py-3 bg-btn-yellow text-lg font-semibold">
//                         Download CV
//                     </FadeInUpButton>
//                 </div>
//             </div>
//             <RightHero />

//         </div>
//     );
// };

// export default Hero;

import styled, { keyframes } from "styled-components";

import { motion, Variants } from "framer-motion";

import { BsCloudDownload } from "react-icons/bs";

const Hero = () => {
    const cardVariants = {
        offscreen: {
            // scale: 20,
        },
        onscreen: {
            scale: [1.3, 1],
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1.9,
            },
        },
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full px-20 lg:py-[2%]"
        >
            <div className="grid   justify-center items-center ">
                <div>
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        className="text-4xl mb-8 font-bold "
                    >
                        Hey there, I am LAHCEN
                    </motion.div>

                    <div className="text-2xl  mb-20">
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                        >
                            A Full-Stack Developer <br />
                        </motion.div>
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                        >
                            & Design Enthusiast
                        </motion.div>
                    </div>
                    <motion.button
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        className=" flex justify-center items-center  px-6 py-3 hover:opacity-90 bg-btn-yellow text-lg font-semibold"
                    >
                        <BsCloudDownload className="text-2xl " /> &nbsp; &nbsp;
                        Download CV
                    </motion.button>
                </div>
            </div>
            <motion.img
                variants={cardVariants}
                src="https://images.business.com/app/uploads/2019/05/05125715/Video-game-developer.png"
                className=" flex justify-center items-center min-[560px]:visible invisible"
            />
        </motion.div>
    );
};

export default Hero;
