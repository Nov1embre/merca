import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContacteConComponent } from './componentes/contacte-con/contacte-con.component';
import { PieComponent } from './componentes/pie/pie.component';
import { WorksComponent } from './componentes/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    AcercaDeComponent,
    HabilidadesComponent,
    EducacionComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContacteConComponent,
    PieComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
