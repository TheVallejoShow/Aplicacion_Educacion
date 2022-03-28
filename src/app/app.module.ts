import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas 
import { APP_ROUTING } from './app.routes'

// Servicios
import { contenidosService } from './services/contenidos.service';

/// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContenidosComponent } from './components/contenidos/contenidos.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ContenidoTarjetaComponent } from './components/contenido-tarjeta/contenido-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContenidosComponent,
    ContenidoComponent,
    BuscadorComponent,
    ContenidoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
  ],
  providers: [
    contenidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
