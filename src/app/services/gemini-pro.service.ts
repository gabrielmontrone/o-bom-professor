import { Injectable } from '@angular/core';
import { PdfService } from './pdf.service';
import { PromptService } from './prompt.service';
import { DisciplineService } from './discipline.service'; 
import { ApiService } from './api.service'; 

/**
 * GeminiProService é responsável por interagir com o modelo de IA do Google (Gemini) para gerar sugestões de adaptação.
 * O serviço faz requisições para a API de IA, passando o texto extraído do PDF e uma descrição do aluno, e então retorna um texto adaptado,
 * que pode ser usado pelos professores para ajustar suas atividades pedagógicas às necessidades específicas dos alunos.
 */


@Injectable({
  providedIn: 'root'
})
export class GeminiProService {
  constructor(
    private pdfService: PdfService,
    private promptsService: PromptService,
    private disciplineService: DisciplineService,
    private apiService: ApiService 
  ) {}

  async generateStory(pdfText: string, descriptionInput: string): Promise<void> {
    try {
      let disciplinePrompt = '';
      const selectedDiscipline = this.disciplineService.getSelectedDiscipline();

      switch (selectedDiscipline) {
        case 'Exatas':
          disciplinePrompt = this.promptsService.exatas(pdfText, descriptionInput);
          break;
        case 'Humanas':
          disciplinePrompt = this.promptsService.humanas(pdfText, descriptionInput);
          break;
        case 'Biológicas':
          disciplinePrompt = this.promptsService.biologicas(pdfText, descriptionInput);
          break;
        default:
          disciplinePrompt = 'Nenhuma disciplina foi selecionada.';
      }

      const prompt = this.promptsService.default(pdfText, descriptionInput, disciplinePrompt);
      console.log("Prompt combinado:", prompt);

      // Usando ApiService para gerar a atividade
      const result = await this.apiService.generateFromApi(prompt).toPromise();
      const responseText = result.response;

      const responseOutput = document.getElementById('responseOutput');
      if (responseOutput) {
        responseOutput.innerText = responseText;
      }

      this.pdfService.generatePDF(responseText);
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      const responseOutput = document.getElementById('responseOutput');
      if (responseOutput) {
        responseOutput.innerText = 'Erro ao conectar com a API. Por favor, tente novamente.';
      }
    }
  }
}
