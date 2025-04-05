import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"
import { Github, PencilLine } from "lucide-react"
import Sabinui from "../assets/sabinui.png"
import OrganicKarnali from "../assets/organickarnali.png"
import SwiftOps from "../assets/swiftops.png"
import Crypto from "../assets/crypto.png"
import Trendora from "../assets/trendora.png"
import Portfolio from "../assets/portfolio.png"

const Projects = () => {

    const projects = [
        {
            title: "Sabin UI",
            description: "A UI library for React & vanilla JavaScript",
            techstack: "React / TailwindCSS / Framer",
            image: Sabinui,
            sourceCode: "https://github.com/maybesabin/SabinUI",
            livePreview: "https://sabinui.vercel.app/"
        },
        {
            title: "Organic Karnali",
            description: "An e-commerce site with cart & checkout functionality",
            techstack: "Next js / TailwindCSS / Framer / Shadcn UI",
            image: OrganicKarnali,
            sourceCode: "https://github.com/E-pravidi-Web-Dev/organickarnali_frontend",
            livePreview: "https://organickarnalifrontend.web.app/"
        },
        {
            title: "SwiftOps",
            description: "An AI SaaS-themed landing page",
            techstack: "React / TailwindCSS / Shadcn UI",
            image: SwiftOps,
            sourceCode: "https://github.com/maybesabin/SwiftOps",
            livePreview: "https://swiftops.vercel.app/"
        },
        {
            title: "Crypto Landing Page",
            description: "A crypto app landing page",
            techstack: "React / TailwindCSS / GSAP",
            image: Crypto,
            sourceCode: "https://github.com/maybesabin/Crypto-Website",
            livePreview: "https://crypto-website-sabin.vercel.app/"
        },
        {
            title: "Trendora",
            description: "An e-commerce website",
            techstack: "React / TailwindCSS / Context API",
            image: Trendora,
            sourceCode: "https://github.com/maybesabin/Trendora-Ecommerce",
            livePreview: "https://trendora-shop.vercel.app/"
        },
        {
            title: "Old Portfolio",
            description: "my old portfolio website",
            techstack: "React / TailwindCSS / GSAP",
            image: Portfolio,
            sourceCode: "https://github.com/maybesabin/Portfolio-Latest",
            livePreview: "https://sxbin.netlify.app/"
        }
    ];

    return (
        <div className="w-full flex flex-col items-start gap-3 mt-4">
            <motion.h2
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.17 }}
                className="md:text-xl text-base font-semibold">Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {projects.map((project, index) => (
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ ...fadeIn.transition, delay: 0.17 * (index + 1) }}
                        key={index}
                        className="flex flex-col items-start gap-2 w-full"
                    >
                        <img src={project.image} className="brightness-75 hover:brightness-100 transition-all object-cover w-full md:h-72 h-56 rounded-lg" alt="" />
                        <h3 className="md:text-base text-sm font-medium mt-2">{project.title}</h3>
                        <h4 className="text-[0.7rem] text-[#25dde5] -mt-2">
                            {project.techstack}
                        </h4>
                        <p className="my-1.5 text-xs text-neutral-300 font-light">
                            {project.description}
                        </p>
                        <div className="flex items-center gap-5">
                            <a target="_blank" href={project.livePreview} className="cursor-pointer flex items-center gap-2 text-[#25dde5] hover:text-[#58ecf4]">
                                <PencilLine className="md:size-[15px] size-[12px]" />
                                <h6 className="text-xs">Live Preview</h6>
                            </a>
                            <a target="_blank" href={project.sourceCode} className="cursor-pointer flex items-center gap-2 text-[#25dde5] hover:text-[#58ecf4]">
                                <Github className="md:size-[15px] size-[12px]" />
                                <h6 className="text-xs">Repo Url</h6>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects