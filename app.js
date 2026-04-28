const express = require("express");
const app = express();

const PORT = 3000;

// Version (change this to test CI/CD)
const VERSION = "v2.0";

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Node.js CI/CD App</h1>
        <p><b>Status:</b> Running Successfully ✅</p>
        <p><b>Version:</b> ${VERSION}</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        <p><b>Server:</b> EC2 Auto Deployment</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});