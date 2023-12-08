const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL 연결 정보 설정
const pool = new Pool({
    user: process.env.DB_USER || 'default_user',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'default_db',
    password: process.env.DB_PASSWORD || 'default_password',
    port: process.env.DB_PORT || 5432,
});

app.use(bodyParser.json());

// 투표 수 조회하는 함수
app.get('/api/getVotes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM vote');
        const votes = result.rows;
        res.json({ success: true, votes });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// 투표 수 증가하는 함수
app.post('/api/vote', async (req, res) => {
    try {
        const { id } = req.body;
        const result = await pool.query('UPDATE vote SET cnt = cnt + 1 WHERE id = $1 RETURNING *', [id]);
        const updatedVote = result.rows[0];
        res.json({ success: true, updatedVote });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
