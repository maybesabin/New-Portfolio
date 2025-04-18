import { fadeIn } from "../utils/animation"
import { motion } from "framer-motion"

const Contact = () => {
    const socials = [
        { title: "twitter/x", link: "https://x.com/16calc" },
        { title: "github", link: "https://github.com/maybesabin" },
        { title: "linkedin", link: "https://www.linkedin.com/in/sabinhamal/" },
        { title: "instagram", link: "https://www.instagram.com/codeandlifts/" }
    ]

    return (
        <div className="w-full">
            <motion.h2
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.25 }}
                className="text-sm mt-4">
                contact
            </motion.h2>

            <div className="flex items-center gap-2 flex-wrap mt-2">
                {socials.map((item, idx) => (
                    <motion.a
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        viewport={fadeIn.viewport}
                        transition={{ ...fadeIn.transition, delay: 0.25 * idx }}
                        target="_blank"
                        href={item.link}
                        className="text-xs rounded-full bg-neutral-800 hover:bg-neutral-700 transition-all px-3 py-1"
                        key={idx}>
                        {item.title}
                    </motion.a>
                ))}
            </div>
        </div>
    )
}

export default Contact