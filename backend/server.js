require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//mongodb connection
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongodb ✅")
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
connectToDb();

// Schema
const ViewSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
});

const View = mongoose.model('View', ViewSchema);

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

app.get('/api/view-count', async (req, res) => {
    let viewDoc = await View.findOne();
    if (!viewDoc) {
        viewDoc = new View({ count: 1 });
    } else {
        viewDoc.count += 1;
    }
    await viewDoc.save();
    res.json({ views: viewDoc.count });
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})