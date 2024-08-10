const request = require('supertest');
const express = require('express');
const mentoriaRoutes = require('../routes/mentoriaRoutes');

const app = express();
app.use('/programas-mentoria', mentoriaRoutes);

describe('GET /programas-mentoria', () => {
    it('deve retornar uma lista de programas de mentoria e suporte', async () => {
        const response = await request(app).get('/programas-mentoria');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { nome: 'Programa de Mentoria LGBTQIA+ A', descricao: 'Conectando mentores LGBTQIA+ a jovens profissionais.' },
            { nome: 'Rede de Suporte LGBTQIA+ B', descricao: 'Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho.' }
        ]);
    });
});
