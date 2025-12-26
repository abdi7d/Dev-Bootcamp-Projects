// Logic for different routes
const getHome = (req, res) => {
    res.json({ message: "Welcome to the Home Page!" });
};

const getAbout = (req, res) => {
    res.json({ message: "This is the About response." });
};

const getContact = (req, res) => {
    res.json({ message: "Contact us at support@example.com" });
};

const getDynamicData = (req, res) => {
    res.json({ 
        greeting: "Hello there!", 
        serverTime: new Date().toLocaleTimeString() 
    });
};

const handlePostData = (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "No JSON data provided" });
    }
    res.json({ 
        status: "Data received successfully", 
        echo: data 
    });
};

module.exports = {
    getHome,
    getAbout,
    getContact,
    getDynamicData,
    handlePostData
};