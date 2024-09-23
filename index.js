const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 15502;

app.use((req, _res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
})

app.get('/*', async (req, res) => {
    console.log('req.url', req.url);
    try {
        const response = await axios.get(`https://repo.hex.pm${req.url}`, {
            responseType: 'stream',
        });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error proxying file download:', error);
        res.status(500).json({ error: 'Error proxying file download' });
    }
});

app.listen(PORT, () => {
    console.log(`repo.hex.pm proxy is running on port ${PORT}`);
});