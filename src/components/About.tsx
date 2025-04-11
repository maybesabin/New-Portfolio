import { IconBriefcase } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"

const About = () => {
    return (
        <div
            className="w-full flex flex-col items-start gap-2">
            <motion.p
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.12 }}
                className="md:text-sm text-xs text-neutral-400">
                a 18 year old full stack developer from Nepal. I thrive in creating pixel perfect websites. I specialize in  <span className="text-white inline-block">Frontend Development.</span> Besides coding, I like boxing, watching paranormal movies and documentaries.
            </motion.p>

            <motion.p
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.13 }}
                className="md:text-sm text-xs text-neutral-400 mt-2">
                I'm available for internships, full time opportunities and freelance projects.
            </motion.p>

            <a href="mailto:highsabin987@gmail.com" target="_blank">
                <motion.div
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{ ...fadeIn.transition, delay: 0.14 }}
                    className="border-neutral-800 border cursor-pointer hover:bg-neutral-700 transition-all rounded-lg px-2 py-1.5 flex items-center gap-2 -mt-1">
                    <IconBriefcase size={17} />
                    <h3 className="md:text-sm text-xs">Hire Me</h3>
                </motion.div>
            </a>
        </div>
    )
}

export default About