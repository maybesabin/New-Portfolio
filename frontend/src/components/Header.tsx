import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"
import { useEffect, useState } from "react"
import { Cloud } from "lucide-react"

const Header = () => {
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
        <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
        >
            {temperature &&
                <div
                    className="flex justify-end relative">
                    <div
                        className="group px-2 py-[0.65rem] rounded-md cursor-pointer hover:bg-neutral-900 transition-all flex items-center gap-2">
                        <Cloud size={'15px'} className="text-neutral-400" />
                        <h3 className="text-xs text-neutral-400">{temperature} °C</h3>
                        <div className="group-hover:visible invisible absolute -top-2 right-20 text-xs text-neutral-300 border border-neutral-400 rounded-sm p-1.5">
                            Current temperature of my city
                        </div>
                    </div>

                </div>
            }
            <h1 className="md:text-2xl text-base tracking-tight">
                i'm <span className="font-semibold">sabin</span>
            </h1>
        </motion.div>
    )
}

export default Header