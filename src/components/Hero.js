// import styled, { keyframes } from "styled-components";

// import { motion, Variants } from "framer-motion";

// import { BsCloudDownload } from "react-icons/bs";

// const Hero = () => {
//     const cardVariants = {
//         onscreen: {
//             scale: [1.3, 1],
//             transition: {
//                 type: "spring",
//                 bounce: 0.5,
//                 duration: 1.9,
//             },
//         },
//     };

//     return (
//         <motion.div
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.8 }}
//             className="grid grid-cols-2 gap-4 h-full px-20 lg:py-[2%]"
//         >
//             <div className="grid justify-center items-center ">
//                 <div>
//                     <motion.div
//                         initial={{ y: -100 }}
//                         animate={{ y: 0 }}
//                         transition={{ ease: "easeOut", duration: 1.5 }}
//                         className="text-4xl mb-8 font-bold "
//                     >
//                         Hey there, I am LAHCEN
//                     </motion.div>

//                     <div className="text-2xl  mb-20">
//                         <motion.div
//                             initial={{ y: -200, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ ease: "easeOut", duration: 1.5 }}
//                         >
//                             Collaborative React developer, <br />
//                         </motion.div>
//                         <motion.div
//                             initial={{ y: -300, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ ease: "easeOut", duration: 1.5 }}
//                         >
//                             Committed to continuous improvement.
//                         </motion.div>
//                     </div>
//                     <motion.button
//                         initial={{ y: 100 }}
//                         animate={{ y: 0 }}
//                         transition={{ ease: "easeOut", duration: 1.5 }}
//                         className=" flex justify-center items-center  px-6 py-3 hover:opacity-90 bg-btn-yellow text-lg font-semibold"
//                     >
//                         <BsCloudDownload className="text-2xl " /> &nbsp; &nbsp;
//                         Download CV
//                     </motion.button>
//                 </div>
//             </div>
//             <motion.img
//                 variants={cardVariants}
//                 src="https://images.business.com/app/uploads/2019/05/05125715/Video-game-developer.png"
//                 className=" flex justify-center items-center min-[560px]:visible invisible"
//             />
//         </motion.div>
//     );
// };

// export default Hero;

import styled, { keyframes } from "styled-components";

import { motion, Variants } from "framer-motion";

import { BsCloudDownload } from "react-icons/bs";

const Hero = () => {
    const cardVariants = {
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
        <section className="flex h-screen h-5/6 justify-center p-24">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="flex w-4/5 "
            >
                <div className="flex justify-center   items-center w-1/2 max-[700px]:w-full">
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
                                Collaborative React developer, <br />
                            </motion.div>
                            <motion.div
                                initial={{ y: -300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 1.5 }}
                            >
                                Committed to continuous improvement.
                            </motion.div>
                        </div>
                        <motion.button
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            className=" flex justify-center items-center  px-6 py-3 hover:opacity-90 bg-btn-yellow text-lg font-semibold"
                        >
                            <BsCloudDownload className="text-2xl " /> &nbsp;
                            &nbsp; Download CV
                        </motion.button>
                    </div>
                </div>
                <div className="max-[700px]:hidden   w-1/2   flex justify-center items-center">
                    <motion.img
                        variants={cardVariants}
                        src="https://images.business.com/app/uploads/2019/05/05125715/Video-game-developer.png"
                        className="  object-scale-down		"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
