import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioMuseoService } from '../servizio-museo.service';

@Component({
  selector: 'app-mostre-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostre-component.component.html',
  styleUrl: './mostre-component.component.css'
})
export class MostreComponentComponent {

  identificatore:any;
  nome:any;
  artisti:any;
  descrizione:any;
  datainizio:any;
  datafine:any;
  immagine:any;
  costo:any;
  citta:any;
  constructor(private route: ActivatedRoute, public Servizio:ServizioMuseoService){

  }
  ngOnInit(){
 
    this.identificatore = this.route.snapshot.paramMap.get('id');
    this.nome=this.Servizio.dettagli[this.identificatore].nome
    this.artisti=this.Servizio.dettagli[this.identificatore].artisti
    this.descrizione=this.Servizio.dettagli[this.identificatore].descrizione
    this.datainizio=this.Servizio.dettagli[this.identificatore].datainizio
    this.datafine=this.Servizio.dettagli[this.identificatore].datafine
    this.immagine=this.Servizio.dettagli[this.identificatore].immagine
    this.costo=this.Servizio.dettagli[this.identificatore].costo
    this.citta=this.Servizio.dettagli[this.identificatore].citta    
  }
}
