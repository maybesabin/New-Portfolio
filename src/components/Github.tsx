import axios from "axios";
import { useEffect, useState } from "react";

const Github = () => {

    const username = "maybesabin";
    const url = `https://github.com/${username}`
    const [contributions, setContributions] = useState<null | number>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchContributions = async () => {
        try {
            const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);
            setContributions(response.data.total["2025"])
            setError(null);
        } catch (error: any) {
            setError("Failed to fetch contributions.");
            console.log(error.message)
        }
    }

    useEffect(() => { fetchContributions() }, [])

    return (
        <div className="w-full flex justify-end">
            <a
                target="_blank"
                href={url}
                className="text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer mt-2 transition-all">
                {error ? error : `${contributions} contributions this year`}
            </a>
        </div>
    )
}

export default Github