import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list/list-component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MostreComponentComponent } from './mostre/mostre-component.component';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListComponentComponent, NavigationComponent, MostreComponentComponent, IntroductionComponent],
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
