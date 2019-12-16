import { DetallePelicula } from './detalle-pelicula';
//modelos para materializar toda la info obtenida de la consulta
export interface Peliculas {
    status : string,
    copyright: string,
    has_more: string,
    num_results: number,
    results: DetallePelicula[]
}
