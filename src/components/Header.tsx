import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import image from "../assets/pfp.jpg"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"
import { useEffect, useState } from "react"
import { Cloud } from "lucide-react"

const Header = () => {
    const socials = [
        { icon: <IconBrandX className="md:size-[27px] size-[20px]" />, title: "Twitter", link: "https://x.com/16calc" },
        { icon: <IconBrandGithub className="md:size-[27px] size-[20px]" />, title: "Github", link: "https://github.com/maybesabin" },
        { icon: <IconBrandLinkedin className="md:size-[27px] size-[20px]" />, title: "Linkedin", link: "https://www.linkedin.com/in/sabinhamal/" },
        { icon: <IconBrandInstagram className="md:size-[27px] size-[20px]" />, title: "Instagram", link: "https://www.instagram.com/codeandlifts/" }
    ]

    const [temperature, setTemperature] = useState<null | number>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric`
                );
                const data = await response.json();
                setTemperature(data.main.temp);
            } catch (error: any) {
                console.log(`Error:${error.message}`)
            }
        }
        fetchWeather();
    }, [])

    return (
        <>
            {temperature &&
                <div className="flex w-full justify-end">
                    <div
                        title="Current temperature of my city"
                        className="bg-neutral-800 px-2 py-[0.65rem] rounded-md cursor-pointer hover:bg-neutral-800/10 transition-all flex items-center gap-2">
                        <Cloud size={'15px'} />
                        <h3 className="text-xs">{temperature} °C</h3>
                    </div>
                </div>
            }
            <div
                className='w-full flex items-end gap-4'>
                <motion.img
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={fadeIn.transition}
                    src={image} className="md:w-32 w-24 md:h-32 h-24 rounded-lg" alt="" />
                <div className="flex flex-col w-full">
                    <motion.h1
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                        className="md:text-3xl text-2xl font-semibold">Sabin <span className="animate-pulse text-green-500">.</span></motion.h1>
                    <motion.p
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                        className="md:text-sm text-xs text-neutral-500 mb-2">Full Stack Developer
                    </motion.p>
                    <div className="flex items-center gap-2">
                        {socials.map((item, idx) => (
                            <a key={idx} href={item.link} target="_blank">
                                <motion.div
                                    initial={fadeIn.initial}
                                    animate={fadeIn.animate}
                                    transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
                                    key={idx} title={item.title} className="bg-black border border-zinc-700 text-zinc-300 rounded-lg p-1 cursor-pointer">
                                    {item.icon}
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header