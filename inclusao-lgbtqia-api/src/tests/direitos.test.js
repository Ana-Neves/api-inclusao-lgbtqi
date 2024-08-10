const request = require('supertest');
const express = require('express');
const direitosRoutes = require('../routes/direitosRoutes');

const app = express();
app.use('/direitos-trabalhistas', direitosRoutes);

describe('GET /direitos-trabalhistas', () => {
    it('deve retornar uma lista de direitos trabalhistas para pessoas LGBTQIA+', async () => {
        const response = await request(app).get('/direitos-trabalhistas');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            "Brasil": "Direito ao nome social, proteção contra discriminação no trabalho...",
            "EUA": "Proteção contra discriminação com base na orientação sexual e identidade de gênero..."
        });
    });
});
