import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './controller/peliculas/peliculas.component';
import { DetallesPeliculaComponent } from './controller/detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
 // { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
 { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
 { path: 'peliculas', component: PeliculasComponent },
 { path: 'detallesPelicula/:title/:byline/:display_title', component: DetallesPeliculaComponent },
 {path: '**', component: PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
