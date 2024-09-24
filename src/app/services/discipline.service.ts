import { Injectable } from "@angular/core";

/**
 * DisciplineService é responsável por gerenciar as disciplinas disponíveis no sistema e permitir a seleção de uma disciplina.
 * Ele escuta eventos de interação do usuário com a interface, garantindo que a disciplina correta seja associada à atividade.
 * O serviço também se integra com outras partes do sistema para adaptar o conteúdo de acordo com a disciplina escolhida.
 */


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