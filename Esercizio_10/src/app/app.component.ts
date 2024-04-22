import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list/list-component.component';
import { MostreComponentComponent } from './mostre/mostre-component.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListComponentComponent, MostreComponentComponent, IntroductionComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio_10';


  bottone:boolean=true

  onRiceviDati(value: any){

    this.bottone=value
}
}
