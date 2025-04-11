import axios from "axios"
import { useEffect, useState } from "react";

const Spotify = () => {
    const [currentTrack, setCurrentTrack] = useState<any | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = window.location.origin; // Your app's redirect URI
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPES = "user-read-currently-playing"; // The permission we need

    const generateRandomString = (length: number) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return Array.from(values)
            .map(x => possible[x % possible.length])
            .join('');
    };

    const authenticate = () => {
        // Generate a random state string to protect against CSRF
        const state = generateRandomString(16);
        localStorage.setItem("spotify_auth_state", state);

        // Redirect to Spotify authorization page
        const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}&state=${state}`;
        window.location.href = authUrl;
    };
    const getTokenFromHash = () => {
        if (!window.location.hash) return null;

        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const token = hashParams.get("access_token");
        const state = hashParams.get("state");
        const storedState = localStorage.getItem("spotify_auth_state");

        // Verify state to prevent CSRF attacks
        if (state === null || state !== storedState) {
            setError("State mismatch error. Please try again.");
            return null;
        }

        // Clean up the URL
        window.history.replaceState({}, document.title, window.location.pathname);

        if (token) {
            localStorage.setItem("spotify_access_token", token);
            return token;
        }
        return null;
    };

    const fetchCurrentlyPlaying = async () => {
        const token = localStorage.getItem("spotify_access_token");

        if (!token) {
            setError("No access token found. Please authenticate.");
            return;
        }

        try {
            const response = await axios.get<any>(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // If 204 No Content is returned, no track is playing
            if (response.status === 204) {
                setCurrentTrack(null);
                setIsPlaying(false);
                return;
            }

            setCurrentTrack(response.data.item);
            setIsPlaying(response.data.is_playing);
            setError(null);
        } catch (error: any) {
            if (error.response?.status === 401) {
                // Token expired - clear it and re-authenticate
                localStorage.removeItem("spotify_access_token");
                setError("Session expired. Please authenticate again.");
            } else {
                setError(`Error fetching data: ${error.message}`);
            }
        }
    };

    useEffect(() => {
        // Check if we just got redirected back from Spotify with a token
        const token = getTokenFromHash();
        const existingToken = localStorage.getItem("spotify_access_token");

        if (token || existingToken) {
            // We have a token, fetch the currently playing track
            fetchCurrentlyPlaying();

            // Set up polling to refresh the currently playing track
            const interval = setInterval(fetchCurrentlyPlaying, 5000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <button onClick={authenticate}>
                Click me
            </button>
            {isPlaying}
            {currentTrack}
            {error}
        </div>
    )
}

export default Spotify