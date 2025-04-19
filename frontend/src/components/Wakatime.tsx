import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animation";

const Wakatime = () => {

    const wakatimeUrl = 'https://wakatime.com/@sabinhamal_'
    const [totalTime, setTotalTime] = useState<null | number>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchContributions = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/wakatime`);
            setTotalTime(response.data?.data[0]?.grand_total?.text)
            setError(null);
        } catch (error: any) {
            setError("Failed to fetch contributions.");
            console.log(error.message)
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
            {error ? 'failed to fetch data' : totalTime == null ? 'i didn&#39;t code today :(' : `i coded ${totalTime} today`}
        </motion.a>
    )
}

export default Wakatime