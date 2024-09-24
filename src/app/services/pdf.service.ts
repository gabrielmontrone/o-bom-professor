import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist'; 

/**
 * PdfService é responsável por fornecer funcionalidades relacionadas ao processamento de arquivos PDF.
 * Ele inclui uma função para extrair o texto de arquivos PDF e outra para gerar PDFs com o conteúdo processado.
 * A extração de texto é útil para adaptar atividades com base no conteúdo do PDF fornecido.
 * O serviço utiliza as bibliotecas `jspdf` e `pdfjs-dist` para realizar essas operações.
 */

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() {
    // Configurar o workerSrc do pdfjs-dist
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
  }

  // Função para extrair texto do PDF
  extractTextFromPDF(pdfFile: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.onload = async function () {
        try {
          const typedArray = new Uint8Array(this.result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;
          let pdfText = '';
  
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item: any) => item.str).join(' ');
            pdfText += pageText + '\n';
          }
  
          resolve(pdfText); // Resolva a Promise com o texto extraído
  
        } catch (error) {
          console.error('Erro ao extrair texto do PDF:', error);
          reject('Erro ao extrair texto do PDF.'); // Rejeita a Promise em caso de erro
        }
      };
  
      fileReader.readAsArrayBuffer(pdfFile);
    });
  }

  // Função para gerar o PDF
  generatePDF(responseText: string): void {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const marginLeft = 20;
    const marginTop = 30;
    const lineHeight = 10;
    const marginBottom = 20;
    const usablePageHeight = pageHeight - marginTop - marginBottom;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Relatório de Adaptação da Atividade", marginLeft, marginTop);

    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("Sugestões para adaptação de acordo com as necessidades do aluno", marginLeft, marginTop + 10);

    const lines = doc.splitTextToSize(responseText, 180);
    let yPosition = marginTop + 20;

    for (let i = 0; i < lines.length; i++) {
      if (yPosition + lineHeight > usablePageHeight) {
        doc.addPage();
        yPosition = marginTop;
      }
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(lines[i], marginLeft, yPosition);
      yPosition += lineHeight;
    }

    doc.save('Resposta-Adaptada.pdf');
  }
}
