const getDireitos = (req, res) => {
    const direitos = {
        Brasil: 'Direito ao nome social, proteção contra discriminação no trabalho...',
        EUA: 'Proteção contra discriminação com base na orientação sexual e identidade de gênero...',
        Canadá: 'Proteção contra discriminação baseada em orientação sexual e identidade de gênero, direitos iguais em todos os aspectos do emprego, e acesso a benefícios de saúde para casais do mesmo sexo.',
        Alemanha: 'Proteção contra discriminação no local de trabalho com base em orientação sexual e identidade de gênero, e igualdade de direitos em relação a benefícios e oportunidades de emprego.',
        França: 'Proteção contra discriminação no emprego com base na orientação sexual e identidade de gênero, e acesso a benefícios de saúde para casais do mesmo sexo.',
        Austrália: 'Proteção contra discriminação no trabalho por orientação sexual e identidade de gênero, e acesso igualitário a oportunidades e benefícios de emprego.',
        Suécia: 'Proteção contra discriminação no emprego baseada em orientação sexual e identidade de gênero, e políticas inclusivas para promover igualdade no local de trabalho.',

    };
    res.json(direitos);
};

module.exports = { getDireitos };
