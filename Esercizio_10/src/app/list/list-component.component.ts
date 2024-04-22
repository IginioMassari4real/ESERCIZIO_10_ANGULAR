import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {

  mostre = [

   {nome:"L'età del Rinascimento", artisti:"Leonardo Da Vinci, Michelangelo, Raffaello, Sandro Botticelli", descrizione:"Esplora il periodo del rinascimento in Europa, caratterizzato dal rinnovamento culturale e scientifico.", datainizio: new Date(2024, 4, 1), datafine: new Date(2024, 4, 8), immagine:"https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/05/storia-rinascimento-italiano.jpg",},

   {nome:"L'eta della rivoluzione", artisti:"Galileo Galilei, Isaac Newton, Voltaire, Thomas Jefferson", descrizione:"Segui l'evoluzione del pensiero scientifico e politico durante il XVII e il XVIII secolo. Esplora le idee che hanno alimentato le rivoluzioni intellettuali, scientifiche, e politiche in tutto il mondo", datainizio: new Date(2024, 4, 2), datafine: new Date(2024, 4, 9), immagine:"https://cdn.studenti.stbm.it/images/2019/03/19/galileo-galilei-e-il-suo-telescopio_600x400.jpeg",},

   {nome:"La rivoluzione culturale degli anni '60 e '70", artisti:"The Beatles, Andy Warhol, Bob Dylan, Marting Luther King JR.", descrizione:"Rivivi il fervore culturale e sociale degli anni '60 e '70, un periodo di cambiamento radicale in musica, arte, politica e società. Esplora movimenti come il movimento per i diritti civili, il movimento hippie e la rivoluzione sessuale", datainizio: new Date(2024, 4, 10), datafine: new Date(2024, 4, 18), immagine:"https://cdn.studenti.stbm.it/images/2023/07/10/anni-60-e-70-orig.jpeg",},

   {nome:"L'era digitale", artisti:"Steve Jobs, Bill Gates, Tim Berners-Lee, Mark Zuckemberg", descrizione:"Segui lìevoluzione della tecnologia digitale, dall'invenzione del computer alla nascita di internet e dei social media. Esplora il modo in cui queste innovazioni hanno trasformato la comunicazione, il lavoro e la vita quotidiana nel mondo di oggi", datainizio: new Date(2024, 4, 15), datafine: new Date(2024, 4, 22), immagine:"https://img.freepik.com/free-photo/businessman-holding-digital-tablet-success-cityscape-generated-by-ai_188544-22431.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1712102400&semt=ais",},

   {nome:"L'unificazione italiana", artisti:"Giuseppe Garibaldi, Giuseppe Mazzini, Camillo Benso di Cavour", descrizione:"Rivivi il momento del risorgimento italiano, un periodo di fervore nazionale e lotta per l'unificazione d'Italia. Esplora le figure chiave, gli eventi e le idee che hanno portato alla creazione dello stato italiano moderno", datainizio: new Date(2024, 5, 3), datafine: new Date(2024, 5, 10), immagine:"https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/01/Battaglia-di-Calatafimi-copertina.jpg?im=AspectCrop=(16,9);",},

   {nome:"", artisti:"", descrizione:"", datainizio: new Date(2024, 5, 1), datafine: new Date(2024, 5, 1), immagine:"",},

   {nome:"", artisti:"", descrizione:"", datainizio: new Date(2024, 5, 1), datafine: new Date(2024, 5, 1), immagine:"",},

  ]
}
