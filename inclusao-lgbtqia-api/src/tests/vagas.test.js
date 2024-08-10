const request = require('supertest');
const express = require('express');
const vagasRoutes = require('../routes/vagasRoutes');

const app = express();
app.use('/vagas-inclusivas', vagasRoutes);

describe('GET /vagas-inclusivas', () => {
    it('deve retornar uma lista de vagas de emprego inclusivas', async () => {
        const response = await request(app).get('/vagas-inclusivas');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { empresa: 'Empresa Inclusiva A', cargo: 'Desenvolvedor(a) Front-end', local: 'Remoto' },
            { empresa: 'Empresa Inclusiva B', cargo: 'Gerente de Projetos', local: 'São Paulo, SP' }
        ]);
    });
});
