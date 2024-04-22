import { Routes } from '@angular/router';
import { ListComponentComponent } from './list/list-component.component';
import { MostreComponentComponent } from './mostre/mostre-component.component';
import { IntroductionComponent } from './introduction/introduction.component';

export const routes: Routes = [

    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    
    {path: 'listaMostre', component: ListComponentComponent}, 
    
    {path: 'Mostre/:id', component: MostreComponentComponent} ,
    
    {path: 'Home', component:IntroductionComponent},

];
