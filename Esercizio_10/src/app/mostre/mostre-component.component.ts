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
  nomeopera1:any;
  artistaopera1:any;
  descrizioneopera1:any;
  immagineopera1:any;
  nomeopera2:any;
  artistaopera2:any;
  descrizioneopera2:any;
  immagineopera2:any;
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
    this.nomeopera1=this.Servizio.dettagli[this.identificatore].nomeopera1
    this.artistaopera1=this.Servizio.dettagli[this.identificatore].artistaopera1   
    this.descrizioneopera1=this.Servizio.dettagli[this.identificatore].descrizioneopera1   
    this.immagineopera1=this.Servizio.dettagli[this.identificatore].immagineopera1
    this.nomeopera2=this.Servizio.dettagli[this.identificatore].nomeopera2
    this.artistaopera2=this.Servizio.dettagli[this.identificatore].artistaopera2
    this.descrizioneopera2=this.Servizio.dettagli[this.identificatore].descrizioneopera2 
    this.immagineopera2=this.Servizio.dettagli[this.identificatore].immagineopera2
 
  }
}
