import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class PromptService {
    exatas(pdfText: string, descriptionInput: string): string {
        return `
        - Contextualize os exercícios, trazendo pra realidades próximas do aluno, como: histórias envolvendo dinheiro, doces, divisão entre amigos, etc.
        - Facilite as contas de acordo com as sugestões sugeridas pelo professor, na descrição do aluno.
        - Faça sugestões criativas para o professor em que momento pode-se usar material extra, como: palitos e outras coisas.
        `;
    }

    humanas(pdfText: string, descriptionInput: string): string {
        return `
        - Procure palavras contextualizadas na lição para o aluno escrever.
        - Peça para o aluno desenhar objetos, pessoas ou coisas que estiverem no contexto da lição.
        - Faça perguntas de interpretação fáceis.
        - Peça para o aluno achar palavras no texto.
        `;
    }

    biologicas(pdfText: string, descriptionInput: string): string {
        return `
        - Procure palavras contextualizadas na lição para o aluno escrever.
        - Busque trazer a ciência da lição para o cotidiano do aluno, fazendo perguntas lúdicas.
        - Faça sugestões para o professor de como deixar a atividade mais lúdica, com quais tipos de imagem e materiais ele pode acrescentar a lição.
        `;
    }

    default(pdfText: string, descriptionInput: string, disciplinePrompt: string): string {
        return `
        Analise essa atividade passada por um professor em PDF: ${pdfText}. 
        Essa atividade em PDF deve ser adaptada para um aluno que possui a seguinte descrição: ${descriptionInput}.

        Proibições:
        - Não resposta as perguntas, apenas as adapte.
        - Não reescreva o texto ou perguntas da mesma forma que estão no PDF. Você sempre deve adaptar.
        - Não insira imagens ou emojis.

        Sugestões Gerais (só use caso não tenha muitas sugestões na descrição do aluno):
        ${disciplinePrompt}

        Formate sua resposta com as seguintes regras:
        - Deve haver uma quebra de linha a cada 80 caracteres ou no final de cada parágrafo.
        - Não pule mais de 1 linha entre frases.
        - NÃO INSIRA NA SUA RESPOSTA OS SEGUINTES CARACTERES: "#" e "*".
        `;
    }
}
