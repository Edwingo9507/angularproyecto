import { Injectable } from '@angular/core';
import { articulo } from '../components/models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

lisArticulo:articulo[]=[
  
  {
    imagen: '',nombreArticulo:'camiseta deportiva hombre',referencia:'CHS', talla:'s',cantidad:22, fechaDeIngreso: new Date('2023-05-12')
  },
  {
    imagen:'',nombreArticulo:'camiseta deportiva hombre',referencia:'CHM',talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  },
  {
    imagen:'',nombreArticulo:'camiseta deportiva hombre',referencia:'CHL',talla:'l',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  },
  {
    imagen:'',nombreArticulo:'camiseta deportiva mujer',referencia:'CMS', talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  },    
  {
    imagen:'',nombreArticulo:'camiseta deportiva mujer',referencia:'CMM', talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  {
    imagen:'',nombreArticulo:'camiseta deportiva mujer',referencia:'CML',talla:'s',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  {
    imagen:'',nombreArticulo:'pantalon hombre',referencia:'PHS',talla:'s',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  {
    imagen:'',nombreArticulo:'pantalon hombre',referencia:'PHM',talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  {
    imagen:'',nombreArticulo:'pantalon hombre',referencia:'PHL', talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  {
    imagen:'',nombreArticulo:'pantalon mujer',referencia:'PMS', talla:'m',cantidad:39, fechaDeIngreso: new Date('2023-05-12')
  }, 
  


];


  constructor() { }

  getArticulo(){
    return this.lisArticulo.slice();
  }
  eliminarArticulo(index:number){
this.lisArticulo.splice(index,1)
  }

  agregarArticulo(articulo:articulo){

    this.lisArticulo.unshift(articulo)
  }

obtenerArticulo(index:number){

  return this.lisArticulo[index];
}

editarArticulo(articulo:articulo,idArticulo:number){
this.lisArticulo[idArticulo].nombreArticulo=articulo.nombreArticulo;
this.lisArticulo[idArticulo].referencia=articulo.referencia;
this.lisArticulo[idArticulo].cantidad=articulo.cantidad;
this.lisArticulo[idArticulo].fechaDeIngreso=articulo.fechaDeIngreso;
this.lisArticulo[idArticulo].talla=articulo.talla;
}


}
