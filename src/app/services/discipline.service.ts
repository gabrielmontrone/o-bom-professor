import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class DisciplineService {
    
    // Função para adicionar event listeners às divs de disciplinas
    addDisciplineListeners(): void {
        const disciplineDivs = document.querySelectorAll('.types-discipline div') as unknown as HTMLDivElement[];

        disciplineDivs.forEach(div => {
            div.addEventListener('click', () => {
                // Remove a classe 'selected' de todas as divs
                disciplineDivs.forEach(d => d.classList.remove('selected'));

                // Adiciona 'selected' na div selecionada
                div.classList.add('selected');

                // Atualiza a disciplina selecionada no localStorage
                const selectedDiscipline = div.innerText;
                localStorage.setItem('selectedDiscipline', selectedDiscipline);

                console.log('Disciplina Selecionada: ', selectedDiscipline);
            });
        });
    }

    // Função para obter a disciplina selecionada
    getSelectedDiscipline(): string | null {
        return localStorage.getItem('selectedDiscipline');
    }
}