import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesService } from 'src/app/helper/services/services.service';
import { Peliculas } from 'src/app/models/peliculas';
import { DetallePelicula } from 'src/app/models/detalle-pelicula';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: DetallePelicula[];

  //iconos de fontawesome
  faFilm = faFilm;
  faSearch = faSearch;
  faImage = faImage;

  //Datos para mostrar el detalle de la pelicula
  display_title = "";
  byline = "";

  constructor(public service: ServicesService) {

    //servcio get consulta todas las peliculas
    this.service.getMovies("reviews/search.json?").subscribe((dataResult: Peliculas) => {

      console.log(dataResult);
      //obtiene las peliculas de la consulta
      this.peliculas = dataResult.results;
    }, (error) => {

      console.log("error", error);
    })
  }

  /*
   * Guarda los datos necesarios para mostrar el detalle de la pelicula
   */
  mostrarDetallePelicula(pelicula: DetallePelicula) {
    //captura el titulo y el autor de la resena para buscarlo con la web service
    this.display_title = pelicula.display_title;
    this.byline = pelicula.byline;

  }

  limpiarDetalle(limpiarTitle) {
    //cuando retorna oculta el componente de detalle de pelicula
    if (limpiarTitle == true)
      this.display_title = '';


  }

  ngOnInit() {

  }




}
