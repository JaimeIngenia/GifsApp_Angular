import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: []
})
export class SlidebarComponent implements OnInit {

  get historial(){
    
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService ) { }

  buscar(termino:string){
    console.log(termino);
    this.gifsService.buscarGifs(termino);
    
  }

  ngOnInit(): void {
  }

}
