"use client";
import Hero from "./Hero";
import TrendingSection from "./TrendingSection";
import {motion} from "framer-motion";


const Homepage=()=> {
    return(
        <div>
                <Hero/>
                <motion.div
                    initial={{ y: 500, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                        duration: 0.8,
                        easings: "easeIn",
                      },
                    }}
                >
                    <TrendingSection/>
                </motion.div>
        </div>
    )
};
export default Homepage;
