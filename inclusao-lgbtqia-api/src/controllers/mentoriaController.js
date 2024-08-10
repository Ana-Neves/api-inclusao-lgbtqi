const getProgramas = (req, res) => {
    const programas = [
        { nome: 'Programa de Mentoria LGBTQIA+ A', descricao: 'Conectando mentores LGBTQIA+ a jovens profissionais.' },
        { nome: 'Rede de Suporte LGBTQIA+ B', descricao: 'Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho.' },
        { nome: 'Pride Mentorship Program', descricao: 'Um programa de mentoria voltado para profissionais LGBTQIA+, oferecendo orientação, apoio e desenvolvimento de carreira em um ambiente inclusivo.' },
        { nome: 'Transgender Employment Support Program', descricao: 'Suporte especializado para pessoas trans no ambiente de trabalho, incluindo orientação sobre direitos, apoio durante a transição e desenvolvimento de carreira.' },
        { nome: 'LGBTQIA+ Career Coaching Network', descricao: 'Rede de coaching de carreira para pessoas LGBTQIA+, com foco em orientação profissional e apoio na busca de oportunidades de emprego.' },
        { nome: 'Out & Equal Workplace Advocates', descricao: 'Organização que oferece recursos, treinamento e suporte para promover a inclusão LGBTQIA+ no ambiente de trabalho e apoiar líderes e colaboradores.' },
        { nome: 'GLOW (Gay and Lesbian Outreach Program)', descricao: 'Programa de apoio e mentoria para a comunidade LGBTQIA+, com foco em desenvolvimento pessoal e profissional e criação de redes de contato.' },
        { nome: 'LGBTQIA+ Professionals Network', descricao: 'Rede de profissionais LGBTQIA+ que oferece suporte, networking e oportunidades de desenvolvimento profissional, incluindo eventos e workshops de carreira.' },
        { nome: 'Lesbian & Gay Foundation Career Support', descricao: 'Suporte de carreira para a comunidade lésbica e gay, com serviços de aconselhamento de carreira, workshops e recursos para promover o avanço profissional.' },
        { nome: 'Pride at Work', descricao: 'Organização que promove a inclusão LGBTQIA+ no local de trabalho e oferece recursos e programas de mentoria para apoiar profissionais LGBTQIA+ em suas carreiras.' },
        { nome: 'Equality Network', descricao: 'Rede que oferece mentoria, apoio e oportunidades de desenvolvimento para pessoas LGBTQIA+ no ambiente de trabalho, com foco em promover igualdade e inclusão.' },
        { nome: 'Trans Can Work', descricao: 'Programa dedicado a apoiar a comunidade trans no mercado de trabalho, oferecendo orientação, recursos e treinamento para facilitar a inclusão e o sucesso profissional.' },
        { nome: 'LGBTQ+ Mentoring Initiative', descricao: 'Iniciativa de mentoria para jovens LGBTQIA+, conectando-os com mentores experientes que podem fornecer orientação e apoio em suas jornadas profissionais.' },
        { nome: 'Diversify Your Workforce Program', descricao: 'Programa focado em ajudar empresas a diversificar suas equipes, oferecendo recursos e suporte para a inclusão de talentos LGBTQIA+ e criação de ambientes de trabalho acolhedores.' },
        { nome: 'LGBTQ+ Youth Employment Program', descricao: 'Programa que oferece apoio e oportunidades de emprego para jovens LGBTQIA+, com foco em ajudar na transição para o mercado de trabalho e no desenvolvimento de habilidades profissionais.' },
        { nome: 'Inclusive Talent Network', descricao: 'Rede dedicada a conectar talentos LGBTQIA+ com oportunidades de emprego inclusivas, oferecendo suporte e orientação para uma integração bem-sucedida no mercado de trabalho.' },
        { nome: 'Global LGBTQ+ Workplace Equality Initiative', descricao: 'Iniciativa global que promove a igualdade de trabalho para pessoas LGBTQIA+, oferecendo recursos, treinamentos e certificações para empresas em todo o mundo.' }
    ];
    res.json(programas);
};

module.exports = { getProgramas };
