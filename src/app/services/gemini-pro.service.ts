import { Injectable } from '@angular/core';
import { PdfService } from './pdf.service';
import { PromptService } from './prompt.service';
import { DisciplineService } from './discipline.service'; 
import { ApiService } from './api.service'; 

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
