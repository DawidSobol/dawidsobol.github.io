const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3000;

// Po³¹czenie z MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Definiowanie schematu u¿ytkownika
const userSchema = new mongoose.Schema({
    user_id: Number,
    username: String,
    password: String,
});

// Tworzenie modelu u¿ytkownika
const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors())
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.send({ success: true });
        } else {
            res.send({ success: false });
        }
    } catch (err) {
        console.error('Error during login', err);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
});

// Endpoint rejestracji 
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save(); res.send({ success: true });
    } catch (err) {
        console.error('Error during registration', err);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
