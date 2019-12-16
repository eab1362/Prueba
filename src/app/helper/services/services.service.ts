import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas } from 'src/app/models/peliculas';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public url: string = "https://api.nytimes.com/svc/movies/v2/";

  private apiKey: string = "Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu";


  constructor(private http: HttpClient) {

  }

  public peliculas: any;



  getMovies(servicio: string): Observable<any> {


    this.peliculas = this.http.get<Peliculas>(this.getUrl(servicio));
    return this.peliculas;
  }

  getUrl(servicio: string): string {
    return this.url + servicio + "api-key=" + this.apiKey;
  }


}
