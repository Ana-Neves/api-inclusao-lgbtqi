const express = require('express');
const app = express();
const vagasRoutes = require('./routes/vagasRoutes');
const direitosRoutes = require('./routes/direitosRoutes');
const mentoriaRoutes = require('./routes/mentoriaRoutes');

app.use(express.json());

app.use('/vagas-inclusivas', vagasRoutes);
app.use('/direitos-trabalhistas', direitosRoutes);
app.use('/programas-mentoria', mentoriaRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});
