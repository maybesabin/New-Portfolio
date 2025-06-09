import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animation";
import { infinity } from 'ldrs'

const Wakatime = () => {
    infinity.register()
    const wakatimeUrl = 'https://wakatime.com/@sabinhamal_'
    const [totalTime, setTotalTime] = useState<null | any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchContributions = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/wakatime`);
            setTotalTime(response.data?.data[0]?.grand_total?.text)
            setError(null);
            setLoading(false);
        } catch (error: any) {
            setError("Failed to fetch contributions.");
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchContributions() }, [])

    return (
        <motion.a
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={fadeIn.viewport}
            transition={{ ...fadeIn.transition, delay: 0.26 }}
            target="_blank"
            href={wakatimeUrl}
            className="text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer mt-2 transition-all">

            {
                loading ?
                    <l-infinity
                        size="25"
                        stroke="2"
                        stroke-length="0.15"
                        bg-opacity="0.1"
                        speed="1.3"
                        color="white"
                    ></l-infinity>
                    :
                    (totalTime == null || totalTime == `0 secs`) ?
                        `i didn't code today` :
                        `i coded ${totalTime} today`
            }
            {(!loading && error) && 'failed to fetch data'}
        </motion.a>
    )
}

export default Wakatime