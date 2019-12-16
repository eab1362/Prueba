import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from 'src/app/helper/services/services.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PeliculasComponent } from 'src/app/controller/peliculas/peliculas.component'
import { Peliculas } from 'src/app/models/peliculas';
import { DetallePelicula } from 'src/app/models/detalle-pelicula';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  pelicula: DetallePelicula;
//captura el autor de la resena a buscar
  @Input() public byline: string;
//captura el titulo de la pelicula a buscar
  @Input() set display_title(title: string) {

    this.title = title;
//si el titulo no esta vacio realiza la consulta
    if (this.title != "")
      this.consultarDetalles(this.title);

  }

  @Output() public limpiar = new EventEmitter<any>();

  title: string;

  /**
   * Realiza la consulta del detalle de la pelicula
   */
  consultarDetalles(title) {
//realiza la busqueda solamente al la pelicula
    console.log("Estoy consultando el detalle pelicula");
    this.service.getMovies("reviews/search.json?reviewer=" + this.byline + "&query=" + title + "&").subscribe((dataResult: Peliculas) => {
      this.pelicula = dataResult.results[0];
      console.log(this.pelicula);
      
    }, (error) => {

      console.log("error", error);
    })

  }

  irAtras() {
    //envia al componente de peliculas una validacion que hace regresar al componente  de peliculas
    this.limpiar.emit(true);
  }



  constructor(
    public service: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {





  }

  ngOnInit() {
    /*this.route.params.subscribe((params: Params) => {
      console.log(params);
    })*/
  }



}
