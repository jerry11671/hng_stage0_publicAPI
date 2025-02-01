const express = require('express');

const app = express(); 
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/api/task0/retrieve', (req, res) => {
    res.status(200).json({
        email: 'jerrygodson3@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/jerry11671/hng_stage0_publicAPI.git'
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})