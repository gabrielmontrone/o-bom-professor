# O Bom Professor

## Descrição

O Bom Professor é uma ferramenta desenvolvida para ajudar educadores a adaptar atividades pedagógicas para atender às necessidades específicas de alunos com diferentes dificuldades de aprendizado. Utilizando inteligência artificial do Google Gemini, a aplicação permite que professores extraiam textos de atividades em PDF e criem sugestões personalizadas para cada aluno.

## Tecnologias e Ferramentas

- **Angular 16**: Framework utilizado para o desenvolvimento do frontend, proporcionando uma interface dinâmica e responsiva.
- **Node.js**: Utilizado como backend para gerenciar as requisições e a lógica de negócios.
- **jsPDF**: Biblioteca para gerar arquivos PDF a partir de texto adaptado.
- **pdfjs-dist**: Biblioteca para extrair texto de arquivos PDF, permitindo a leitura e adaptação de atividades existentes.
- **Google Generative AI (Gemini)**: Integração com IA para gerar adaptações personalizadas das atividades com base em descrições específicas de alunos.
- **TypeScript**: Linguagem de programação utilizada para garantir um desenvolvimento mais robusto e escalável.

## Como Funciona

1. **Upload de PDF**: O usuário pode fazer o upload de uma atividade em formato PDF que deseja adaptar.
2. **Extração de Texto**: O sistema extrai o texto da atividade utilizando a biblioteca `pdfjs-dist`.
3. **Descrição do Aluno**: O professor insere uma descrição do aluno que irá receber a atividade adaptada.
4. **Geração de Sugestões**: Com base no texto extraído e na descrição do aluno, o sistema gera sugestões de adaptação utilizando a API de inteligência artificial.
5. **Download do PDF Adaptado**: O usuário pode baixar um novo PDF com as adaptações sugeridas, pronto para ser utilizado em sala de aula.

## Como Configurar o Projeto

Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/o-bom-professor.git

2. Navegue até o diretório do projeto:
  ```bash
  cd o-bom-professor
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4. Inicie o servidor de desenvolvimento:
  ```bash
  ng serve
  ```
## Constribuição
Constribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para discutir melhorias e novas funcionalidades.

## Licença
Este projeto está licenciado sob a MIT License.


