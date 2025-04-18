const express = require("express")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")

app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

app.get('/api/wakatime', async (req, res) => {
    try {
        const today = getTodayDate();
        const response = await fetch(`https://wakatime.com/api/v1/users/current/summaries?start=${today}&end=${today}`, {
            headers: {
                Authorization: `Basic ${process.env.WAKATIME_API_KEY}`
            }
        })
        const data = await response.json();
        res.json(data)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})
