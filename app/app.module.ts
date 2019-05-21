import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosModule } from './estados/estados.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';

import {Routes, RouterModule} from '@angular/router';

const rotas: Routes = [
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EstadosModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
