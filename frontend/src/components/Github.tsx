import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animation";
import { infinity } from 'ldrs'

const Github = () => {

    infinity.register();
    const username = "maybesabin";
    const url = `https://github.com/${username}`
    const [contributions, setContributions] = useState<null | number>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)

    const fetchContributions = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);
            setContributions(response.data.total["2025"])
            setError(null);
            setLoading(false)
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
            href={url}
            className="text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer mt-2 transition-all">
            {
                (loading || contributions == null) ?
                    <l-infinity
                        size="25"
                        stroke="2"
                        stroke-length="0.15"
                        bg-opacity="0.1"
                        speed="1.3"
                        color="white"
                    ></l-infinity>
                    :
                    `${contributions} contributions this year`
            }
            {(!loading && error) && 'failed to fetch data'}
        </motion.a>
    )
}

export default Github