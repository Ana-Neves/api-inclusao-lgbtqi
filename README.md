# Inclusão LGBTQIA+ API 🌈

Bem-vindo à **Inclusão LGBTQIA+ API** 🚀! Esta API foi desenvolvida para promover a inclusão e diversidade no mercado de trabalho, fornecendo informações sobre vagas de emprego inclusivas, direitos trabalhistas para pessoas LGBTQIA+, e programas de mentoria e suporte.

## Funcionalidades

A API oferece os seguintes endpoints:

- **GET /vagas-inclusivas** 🧑‍💻
  - Retorna uma lista de vagas de emprego inclusivas.
  - Exemplo de resposta:
    ```json
    [
      {
        "empresa": "Empresa Inclusiva A",
        "cargo": "Desenvolvedor(a) Front-end",
        "local": "Remoto"
      },
      {
        "empresa": "Empresa Inclusiva B",
        "cargo": "Gerente de Projetos",
        "local": "São Paulo, SP"
      }
    ]
    ```

- **GET /direitos-trabalhistas** ⚖️
  - Fornece informações sobre direitos trabalhistas para pessoas LGBTQIA+ em diferentes países.
  - Exemplo de resposta:
    ```json
    {
      "Brasil": "Direito ao nome social, proteção contra discriminação no trabalho...",
      "EUA": "Proteção contra discriminação com base na orientação sexual e identidade de gênero..."
    }
    ```

- **GET /programas-mentoria** 🎓
  - Lista programas de mentoria e suporte disponíveis para a comunidade LGBTQIA+.
  - Exemplo de resposta:
    ```json
    [
      {
        "nome": "Programa de Mentoria LGBTQIA+ A",
        "descricao": "Conectando mentores LGBTQIA+ a jovens profissionais."
      },
      {
        "nome": "Rede de Suporte LGBTQIA+ B",
        "descricao": "Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho."
      }
    ]
    ```

## Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** (Node Package Manager)

## Configuração do Projeto

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/inclusao-lgbtqia-api.git
