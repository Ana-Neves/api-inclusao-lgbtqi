const getVagas = (req, res) => {
    const vagas = [
        { empresa: 'Empresa Inclusiva A', cargo: 'Desenvolvedor(a) Front-end', local: 'Remoto' },
        { empresa: 'Empresa Inclusiva B', cargo: 'Gerente de Projetos', local: 'São Paulo, SP' }, 
        { empresa: 'Magazine Luiza', cargo: 'Gerente de E-commerce', local: 'São Paulo, SP' },
        { empresa: 'Tivit', cargo: 'Consultor(a) de TI', local: 'São Paulo, SP' },
        { empresa: 'TOTVS', cargo: 'Analista de Suporte Técnico', local: 'São Paulo, SP' },
        { empresa: 'Petrobras', cargo: 'Engenheiro(a) de Projetos', local: 'Rio de Janeiro, RJ' },
        { empresa: 'Ambev', cargo: 'Analista de Marketing', local: 'São Paulo, SP' },
        { empresa: 'Caixa Econômica Federal', cargo: 'Analista de Riscos', local: 'Brasília, DF' },
        { empresa: 'Bradesco', cargo: 'Desenvolvedor(a) de Sistemas', local: 'São Paulo, SP' },
        { empresa: 'Embraer', cargo: 'Engenheiro(a) de Software', local: 'São José dos Campos, SP' },
        { empresa: 'Salesforce', cargo: 'Software Engineer', local: 'San Francisco, CA, USA' },
        { empresa: 'Google', cargo: 'UX Designer', local: 'Mountain View, CA, USA' },
        { empresa: 'Microsoft', cargo: 'Program Manager', local: 'Redmond, WA, USA' },
        { empresa: 'IBM', cargo: 'Data Scientist', local: 'New York, NY, USA' },
        { empresa: 'Cisco', cargo: 'Network Engineer', local: 'San Jose, CA, USA' },
        { empresa: 'Amazon', cargo: 'Product Manager', local: 'Seattle, WA, USA' },
        { empresa: 'Intel', cargo: 'Hardware Engineer', local: 'Santa Clara, CA, USA' },
        { empresa: 'Adobe', cargo: 'Software Developer', local: 'San Jose, CA, USA' },
        { empresa: 'Spotify', cargo: 'Data Analyst', local: 'New York, NY, USA' },
        { empresa: 'Oracle', cargo: 'Cloud Engineer', local: 'Austin, TX, USA' }
    ];
    res.json(vagas);
};

module.exports = { getVagas };
