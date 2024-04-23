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

   {nome:"L'età del Rinascimento", artisti:"Leonardo Da Vinci, Michelangelo, Raffaello, Sandro Botticelli", descrizione:"Esplora il periodo del rinascimento in Europa, caratterizzato dal rinnovamento culturale e scientifico.", datainizio: new Date(2024, 4, 1), datafine: new Date(2024, 6, 8), immagine:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Ideal_City_%28detail%29.jpg",},

   {nome:"L'eta della rivoluzione", artisti:"Galileo Galilei, Isaac Newton, Voltaire, Thomas Jefferson", descrizione:"Rivivi l'evoluzione del pensiero scientifico e politico durante il XVII e il XVIII secolo, esplorando le idee che hanno guidato le rivoluzioni intellettuali, scientifiche e politiche in tutto il mondo.", datainizio: new Date(2024, 4, 2), datafine: new Date(2024, 6, 9), immagine:"https://cdn.studenti.stbm.it/images/2019/03/19/galileo-galilei-e-il-suo-telescopio_600x400.jpeg",},

   {nome:"La rivoluzione culturale degli anni '60 e '70", artisti:"The Beatles, Andy Warhol, Bob Dylan, Marting Luther King JR.", descrizione:"Rivivi il fervore culturale e sociale degli anni '60 e '70, un periodo di cambiamento radicale in musica, arte, politica e società. Esplora movimenti come il movimento per i diritti civili, il movimento hippie e la rivoluzione sessuale", datainizio: new Date(2024, 4, 10), datafine: new Date(2024, 6, 18), immagine:"https://cdn.studenti.stbm.it/images/2023/07/10/anni-60-e-70-orig.jpeg",},

   {nome:"L'era digitale", artisti:"Steve Jobs, Bill Gates, Tim Berners-Lee, Mark Zuckemberg", descrizione:"Segui l'evoluzione della tecnologia digitale, dall'invenzione del computer alla nascita di internet e dei social media. Esplora il modo in cui queste innovazioni hanno trasformato la comunicazione, il lavoro e la vita quotidiana nel mondo di oggi", datainizio: new Date(2024, 4, 15), datafine: new Date(2024, 6, 22), immagine:"https://img.freepik.com/free-photo/businessman-holding-digital-tablet-success-cityscape-generated-by-ai_188544-22431.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1712102400&semt=ais",},

   {nome:"L'unificazione italiana", artisti:"Giuseppe Garibaldi, Giuseppe Mazzini, Camillo Benso di Cavour", descrizione:"Rivivi il momento del risorgimento italiano, un periodo di fervore nazionale e lotta per l'unificazione d'Italia. Esplora le figure chiave, gli eventi e le idee che hanno portato alla creazione dello stato italiano moderno", datainizio: new Date(2024, 5, 3), datafine: new Date(2024, 7, 10), immagine:"https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/01/Battaglia-di-Calatafimi-copertina.jpg?im=AspectCrop=(16,9);",},

   {nome:"Napoleone: Mito e Realità", artisti:"Jacques-Louis David, Antoine-Jean Gros, Jean-Auguste-Dominique Ingres, Francisco Goya, Horace Vernet", descrizione:"Un'esposizione che esplora la vita, il potere e l'eredità di Napoleone Bonaparte, il leggendario leader francese del XIX secolo, attraverso opere d'arte, documenti storici e reperti.", datainizio: new Date(2024, 5, 5), datafine: new Date(2024, 7, 13), immagine:"https://c4.wallpaperflare.com/wallpaper/778/793/66/jacques-louis-david-bonaparte-franchissant-le-grand-saint-bernard-artwork-oil-painting-wallpaper-preview.jpg",},

   {nome:"Gli splendori dell'antica Grecia", artisti:"Fidia, Prassitele, Zeusi, Apele, Erotodo, Tucidide, Socrate, Platone e Aristotele", descrizione:"Esplora l'Antica Grecia in mostra: arte, mitologia, pensiero e sport che hanno influenzato il mondo occidentale.", datainizio: new Date(2024, 6, 7), datafine: new Date(2024, 8, 14), immagine:"https://w0.peakpx.com/wallpaper/389/964/HD-wallpaper-ancient-greece-greece-8k.jpg",},

  ]

  routing(id:any){
    window.location.href="/Mostre/" + id;
  }
}
