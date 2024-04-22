import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioMuseoService {

  constructor() { }

  dettagli = [

    {nome:"L'età del Rinascimento", artisti:"Leonardo Da Vinci, Michelangelo, Raffaello, Sandro Botticelli", descrizione:"Esplora il Rinascimento europeo, un periodo di rinascita culturale e scientifica che ha trasformato radicalmente la società tra il XIV e il XVII secolo. Caratterizzato da un fervore per l'apprendimento, l'innovazione e la creatività, ha visto un rinnovato interesse per le arti, la letteratura, la filosofia e la scienza. Emerse una nuova visione dell'umanità, centrata sull'individuo e sulla sua potenzialità. Questo periodo ha lasciato un'impronta indelebile sulla storia occidentale, influenzando profondamente la cultura e il pensiero moderni.", datainizio: new Date(2024, 4, 1), datafine: new Date(2024, 6, 8), immagine:"https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/05/storia-rinascimento-italiano.jpg", citta:"Milano (Pinacoteca di Brera)", costo:"110", },

    {nome:"L'eta della rivoluzione", artisti:"Galileo Galilei, Isaac Newton, Voltaire, Thomas Jefferson", descrizione:"Durante il XVII e il XVIII secolo, il mondo ha vissuto una profonda trasformazione intellettuale e sociale. La rivoluzione scientifica ha portato a una nuova comprensione dell'universo, grazie a figure come Galileo Galilei e Isaac Newton. Nel frattempo, idee come democrazia e libertà hanno guidato movimenti rivoluzionari, come la rivoluzione americana e quella francese, che hanno sfidato il potere tradizionale e hanno promosso l'autogoverno. Questo periodo ha avuto un impatto duraturo sulla civiltà occidentale, influenzando il modo in cui pensiamo e viviamo ancora oggi.", datainizio: new Date(2024, 4, 2), datafine: new Date(2024, 6, 9), immagine:"https://cdn.studenti.stbm.it/images/2019/03/19/galileo-galilei-e-il-suo-telescopio_600x400.jpeg", citta:"Roma (Museo Nazionale Romano)", costo:"70",},
 
    {nome:"La rivoluzione culturale degli anni '60 e '70", artisti:"The Beatles, Andy Warhol, Bob Dylan, Marting Luther King JR.", descrizione:"Rivivi il fervore culturale e sociale degli anni '60 e '70, un periodo di grande cambiamento caratterizzato da movimenti come il movimento per i diritti civili, il movimento hippie e la rivoluzione sessuale. Questi movimenti hanno sfidato le norme sociali esistenti e hanno promosso ideali di uguaglianza, pace e libertà individuale. L'epoca è stata segnata da una straordinaria creatività artistica e da una fervente attività politica che ha ridefinito il panorama culturale e politico del tempo.", datainizio: new Date(2024, 4, 10), datafine: new Date(2024, 6, 18), immagine:"https://cdn.studenti.stbm.it/images/2023/07/10/anni-60-e-70-orig.jpeg", citta:"Firenze (Galleria dell'Accademia di Firenze)", costo:"90",},
 
    {nome:"L'era digitale", artisti:"Steve Jobs, Bill Gates, Tim Berners-Lee, Mark Zuckemberg", descrizione:"Segui l'evoluzione della tecnologia digitale, un viaggio che inizia con l'invenzione del computer e si estende fino alla diffusione di internet e dei social media. Queste innovazioni hanno rivoluzionato ogni aspetto della nostra vita, trasformando radicalmente la comunicazione, il lavoro e le interazioni umane. L'invenzione del computer ha permesso l'automazione dei processi e l'elaborazione rapida dei dati, aprendo nuove frontiere nell'ambito della ricerca scientifica, dell'industria e del settore finanziario. Con l'avvento di internet, il mondo è diventato sempre più interconnesso, consentendo alle persone di comunicare, condividere informazioni e accedere a risorse globali in modo immediato e globale. I social media hanno ulteriormente amplificato questa connettività, offrendo piattaforme per l'interazione sociale, la condivisione di esperienze e la creazione di comunità online. ", datainizio: new Date(2024, 4, 15), datafine: new Date(2024, 6, 22), immagine:"https://img.freepik.com/free-photo/businessman-holding-digital-tablet-success-cityscape-generated-by-ai_188544-22431.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1712102400&semt=ais", citta:"Bologna (Pinacoteca nazionale di Bologna)", costo:"120",},
 
    {nome:"L'unificazione italiana", artisti:"Giuseppe Garibaldi, Giuseppe Mazzini, Camillo Benso di Cavour", descrizione:"Rivivi il momento del Risorgimento italiano, un periodo di fervore nazionale e lotta per l'unificazione dell'Italia. Questo movimento, che si estende approssimativamente dal XIX secolo alla metà del secolo successivo, è stato caratterizzato da un crescente sentimento di identità nazionale e da sforzi concertati per superare la frammentazione politica e culturale della penisola italiana. Figure chiave come Giuseppe Garibaldi, Giuseppe Mazzini e Camillo Benso di Cavour hanno giocato ruoli cruciali nell'orchestrare la resistenza contro il dominio straniero e nell'organizzare le forze per l'unificazione. Gli eventi significativi includono le guerre di indipendenza e l'annessione di vari territori italiani sotto il Regno di Sardegna, che alla fine ha portato alla formazione dello stato italiano moderno nel 1861. Questo periodo è stato caratterizzato da una profonda ricerca di identità nazionale e dal desiderio di emancipazione politica, dando vita a una nuova era nella storia italiana.", datainizio: new Date(2024, 5, 3), datafine: new Date(2024, 7, 10), immagine:"https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/01/Battaglia-di-Calatafimi-copertina.jpg?im=AspectCrop=(16,9);", citta:"Torino (Galleria Sabauda)", costo:"65",},
 
    {nome:"Napoleone: Mito e Realità", artisti:"Jacques-Louis David, Antoine-Jean Gros, Jean-Auguste-Dominique Ingres, Francisco Goya, Horace Vernet", descrizione:"Un'esposizione che esplora la vita, il potere e l'eredità di Napoleone Bonaparte, il leggendario leader francese del XIX secolo, attraverso opere d'arte, documenti storici e reperti. Scopri come Napoleone abbia plasmato la politica europea del suo tempo, trasformando la Francia in un impero e influenzando gli eventi storici del XIX secolo. Esplora la sua ambizione, le sue campagne militari e il suo impatto duraturo sulle istituzioni e la cultura.", datainizio: new Date(2024, 5, 5), datafine: new Date(2024, 7, 13), immagine:"https://c4.wallpaperflare.com/wallpaper/778/793/66/jacques-louis-david-bonaparte-franchissant-le-grand-saint-bernard-artwork-oil-painting-wallpaper-preview.jpg", citta:"Firenze (Galleria degli Uffizi)", costo:"85",},
 
    {nome:"Gli splendori dell'antica Grecia", artisti:"Fidia, Prassitele, Zeusi, Apele, Erotodo, Tucidide, Socrate, Platone e Aristotele", descrizione:"Esplora l'Antica Grecia in mostra, un'epoca di straordinario sviluppo culturale e intellettuale. Attraverso l'arte, la mitologia, il pensiero filosofico e lo sport, scopri come questa civiltà ha influenzato profondamente la cultura occidentale. Dai capolavori artistici alle leggende degli dei, dalla filosofia al mondo degli antichi giochi, immergiti in un'esperienza che rivela il lascito duraturo dell'Antica Grecia nel mondo moderno.", datainizio: new Date(2024, 6, 7), datafine: new Date(2024, 8, 14), immagine:"https://w0.peakpx.com/wallpaper/389/964/HD-wallpaper-ancient-greece-greece-8k.jpg", citta:"Venezia (Galleria dell'Accademia)", costo:"130"}, 

  ]
}
