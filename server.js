require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => console.log('✅ Database synced'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
