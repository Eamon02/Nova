// Requiring necessary npm packages
const express = require('express');
const connectDB = require('./database/db');
const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
