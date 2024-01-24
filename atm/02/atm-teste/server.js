require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const appListener = () => app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const mongoListener = async () => mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/api/transactions', transactionRoutes);
app.use('*', (req, res) => res.status(404).send('Página não encontrada'));

try {
    mongoListener()
        .then(() => {
            console.log('MongoDB connected')
            appListener();
        });
} catch (err) {
    console.log(err);
}
