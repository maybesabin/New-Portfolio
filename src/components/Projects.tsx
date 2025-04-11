import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react";

const Projects = () => {

    const projects = [
        {
            title: "Sabin UI",
            description: "A UI library for React & vanilla JavaScript",
            icon: "✨",
            sourceCode: "https://github.com/maybesabin/SabinUI",
            livePreview: "https://sabinui.vercel.app/"
        },
        {
            title: "Organic Karnali",
            description: "An e-commerce site with cart & checkout functionality",
            icon: "🛒",
            sourceCode: "https://github.com/E-pravidi-Web-Dev/organickarnali_frontend",
            livePreview: "https://organickarnalifrontend.web.app/"
        },
        {
            title: "SwiftOps",
            description: "An AI SaaS-themed landing page",
            icon: "🌐",
            sourceCode: "https://github.com/maybesabin/SwiftOps",
            livePreview: "https://swiftops.vercel.app/"
        },
        {
            title: "Crypto Landing Page",
            description: "A crypto app landing page",
            icon: "💲",
            sourceCode: "https://github.com/maybesabin/Crypto-Website",
            livePreview: "https://crypto-website-sabin.vercel.app/"
        },
        {
            title: "Trendora",
            description: "An e-commerce website",
            icon: "📦",
            sourceCode: "https://github.com/maybesabin/Trendora-Ecommerce",
            livePreview: "https://trendora-shop.vercel.app/"
        },
        {
            title: "Old Portfolio",
            description: "my old portfolio website",
            icon: "📁",
            sourceCode: "https://github.com/maybesabin/Portfolio-Latest",
            livePreview: "https://sxbin.netlify.app/"
        }
    ];

    const [showMore, setShowMore] = useState<boolean | false>(false);

    return (
        <div className="w-full flex flex-col items-start gap-3 mt-4">
            <motion.h2
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.16 }}
                className="text-sm mb-1">projects
            </motion.h2>

            <div className="flex flex-col items-start gap-4 w-full relative">
                {projects.map((item, idx) => (
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ ...fadeIn.transition, delay: 0.24 * idx }}
                        className="md:flex hidden items-end justify-between w-full"
                        key={idx}
                    >
                        <div className="flex items-center">
                            <div className="bg-neutral-800 rounded-lg p-2 md:text-sm text-xs">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-start">
                                <a
                                    href={item.livePreview}
                                    target="_blank"
                                    className="hover:bg-neutral-800 ml-2 px-2 py-0.5 rounded-full cursor-pointer group lowercase md:text-sm text-xs flex items-center gap-1">
                                    <span>{item.title}</span>
                                    <ArrowUpRight className="group-hover:-mt-0.5 group-hover:ml-0.5 transition-all" size={'15px'} />
                                </a>
                                <p className="pl-4 text-neutral-500 text-xs lowercase">{item.description}</p>
                            </div>
                        </div>
                        <a
                            href={item.sourceCode}
                            target="_blank"
                            className="text-xs text-neutral-500 hover:text-white transition-all">
                            code
                        </a>
                    </motion.div>
                ))}
                {(showMore ? projects : projects.slice(0, 4)).map((item, idx) => (
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ ...fadeIn.transition, delay: showMore ? 0.17 * idx : 0.24 * idx }}
                        className="md:hidden flex items-end justify-between w-full"
                        key={idx}
                    >
                        <div className="flex items-center">
                            <div className="bg-neutral-800 rounded-lg p-2 md:text-sm text-xs">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-start">
                                <a
                                    href={item.livePreview}
                                    target="_blank"
                                    className="hover:bg-neutral-800 ml-2 px-2 py-0.5 rounded-full cursor-pointer group lowercase md:text-sm text-xs flex items-center gap-1">
                                    <span>{item.title}</span>
                                    <ArrowUpRight className="group-hover:-mt-0.5 group-hover:ml-0.5 transition-all" size={'15px'} />
                                </a>
                                <p className="pl-4 text-neutral-500 text-xs lowercase">{item.description}</p>
                            </div>
                        </div>
                        <a
                            href={item.sourceCode}
                            target="_blank"
                            className="text-xs text-neutral-500 hover:text-white transition-all">
                            code
                        </a>
                    </motion.div>
                ))}
                {!showMore ?
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="md:hidden block text-xs mt-1 text-neutral-400">
                        show more
                    </button> :
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="md:hidden block text-xs mt-1 text-neutral-400">
                        show less
                    </button>
                }
            </div>
        </div>
    )
}

export default Projects