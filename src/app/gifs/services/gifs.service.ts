import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string   = 'IXk8ytNuXLbi4D8MC4Q1OP4qm4UE6ojl';
  private _historial: string[] = [];
  //TODO cambiar ant con su tipo crreop
  public resultados: any[] = [];

  get historial(){
    return [...this._historial]
  }

  constructor( private http: HttpClient){

  }

  buscarGifs ( query: string = ''){
    
    query = query.trim().toLocaleLowerCase(); 
console.log(query);

    if( !this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.slice(0,10);
    }
    
    // fetch(`api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&q=pokemon`)
    //oBSERVABLES
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=IXk8ytNuXLbi4D8MC4Q1OP4qm4UE6ojl&q=${query}&limit=20`)
    .subscribe( (resp: any) => {
      console.log(resp.data);
      this.resultados = resp.data;
      
    } )  


    

  }

}
