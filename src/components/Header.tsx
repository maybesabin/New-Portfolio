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
                    className="flex w-full justify-end">
                    <div
                        title="Current temperature of my city"
                        className="px-2 py-[0.65rem] rounded-md cursor-pointer hover:bg-neutral-900 transition-all flex items-center gap-2">
                        <Cloud size={'15px'} />
                        <h3 className="text-xs">{temperature} °C</h3>
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