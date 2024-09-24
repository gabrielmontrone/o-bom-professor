// left-section.component.ts
import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../services/pdf.service';
import { DescriptionService } from '../../services/description.service';
import { DisciplineService } from '../../services/discipline.service';
import { GeminiProService } from '../../services/gemini-pro.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {
  randomDescription: string = '';

  constructor(
    private descriptionService: DescriptionService,
    private disciplineService: DisciplineService,
    private geminiProService: GeminiProService,
    private pdfService: PdfService // Injeção do PdfService
  ) {}

  ngOnInit(): void {
    this.setRandomDescription();
    this.selectDiscipline();
    this.setupEventListeners();
  }

  setRandomDescription(): void {
    this.randomDescription = this.descriptionService.getRandomDescription();
  }

  selectDiscipline(): void {
    this.disciplineService.addDisciplineListeners();
  }

  setupEventListeners(): void {
    const generateButton = document.getElementById('generateButton');
    if (generateButton) {
      generateButton.addEventListener('click', async () => {
        console.log('Botão clicado!');
        const pdfInput = document.getElementById('pdfInput') as HTMLInputElement | null;
        const descriptionInput = document.getElementById('descriptionInput') as HTMLTextAreaElement;
  
        let pdfText = '';
        if (pdfInput && pdfInput.files && pdfInput.files.length > 0) {
          pdfText = await this.pdfService.extractTextFromPDF(pdfInput.files[0]);
        }
  
        const description = descriptionInput.value; // Obtenha o valor da descrição
  
        console.log("Texto do PDF:", pdfText);
        console.log("Descrição do aluno:", description);
  
        await this.geminiProService.generateStory(pdfText, description);
      });
    }
  }

  showFileName(event: Event): void {
    const input = event.target as HTMLInputElement;
    const fileNameElement = document.getElementById('file-name');
    
    if (input.files && input.files.length > 0) {
        const fileName = input.files[0].name;
        if (fileNameElement) {
            fileNameElement.textContent = `Arquivo selecionado: ${fileName}`;
        }
    } else {
        if (fileNameElement) {
            fileNameElement.textContent = ''; // Limpa o texto se nenhum arquivo for selecionado
        }
    }
  }
}
