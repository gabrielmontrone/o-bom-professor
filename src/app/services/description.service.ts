import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class DescriptionService {
    private descriptions: string[] = [
        "O aluno é autista e tem grandes dificuldades em prestar atenção em grandes textos e perguntas muito complexas. Resuma o texto e reescreva as perguntas de forma fácil e literal.",
        "O aluno tem síndrome de Down, ainda não sabe ler e escrever, está no processo de alfabetização. Resuma o conteúdo do texto e reescreva as perguntas se baseando em atividades de alfabetização no contexto da atividade, como escrever palavras que aparecem no texto e perguntas muito simples de interpretação.", 
        "O aluno possui TDAH e tem dificuldade em manter o foco em atividades prolongadas. Divida a atividade em partes menores com intervalos regulares. Utilize gráficos e diagramas para ilustrar conceitos importantes e mantenha as instruções claras e diretas.",
        "O aluno tem dislexia e encontra dificuldades em ler e interpretar textos extensos. Resuma os textos em parágrafos curtos e adicione uma lista de palavras-chave e seus significados para facilitar a compreensão.",
        "A aluna é autista e prefere atividades que têm um padrão claro e previsível. Estruture a atividade em passos claros e forneça uma agenda visual das etapas a serem seguidas. Use exemplos concretos e evite mudanças inesperadas na atividade.",
        "O aluno tem problemas motores finos que dificultam a escrita manual. Sugira o uso de ferramentas digitais para completar a atividade, como digitação em vez de escrita manual.", 
        "A aluna tem dificuldade com a matemática devido a dificuldades de aprendizado específicas. Forneça exercícios práticos com apoio visual, como vídeos e tutoriais passo a passo. Ofereça problemas com soluções detalhadas e suporte adicional para tirar dúvidas.",
        "O aluno tem ansiedade e fica sobrecarregado com tarefas extensas e complexas. Reduza o tamanho da atividade e ofereça prazos mais flexíveis. Forneça feedback positivo regularmente para ajudar a reduzir a ansiedade."
      ];

    // Função para obter uma descrição aleatória
    getRandomDescription(): string {
        const randomIndex = Math.floor(Math.random() * this.descriptions.length);
        return this.descriptions[randomIndex];
    }
}