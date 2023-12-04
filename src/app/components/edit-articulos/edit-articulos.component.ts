import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { articulo } from '../models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-articulos',
  templateUrl: './edit-articulos.component.html',
  styleUrls: ['./edit-articulos.component.css']
})
export class EditArticulosComponent {

  myForm!:FormGroup;
  idArticulo:any;
  accion="Crear"

constructor(private fb :FormBuilder,private articuloservice:ArticuloService,private route:Router,public snackBar:MatSnackBar,private aroute:ActivatedRoute){

  this.myForm=fb.group({
    nombreArticulo:['',[Validators.required,Validators.maxLength(15)]],
    referencia:['',Validators.required],
    cantidad:['',Validators.required],
    fechaDeIngreso:['',Validators.required],
    talla:['',Validators.required]
  });
  this.idArticulo=aroute.snapshot.params['id']
}

ngOnInit():void{

  if(this.idArticulo !=undefined){
this.accion="Editar";
 this.obtenerArticulo()
  }

}

guardarArticulo(){

const articulo:articulo={

  nombreArticulo:this.myForm.get('nombreArticulo')?.value,
  referencia:this.myForm.get('referencia')?.value,
  cantidad:this.myForm.get('cantidad')?.value,
  fechaDeIngreso:this.myForm.get('fechaDeIngreso')?.value,
  imagen:this.myForm.get('imagen')?.value,
  talla:this.myForm.get('talla')?.value
};

if(this.idArticulo!==undefined){

this.editarArticulo(articulo);

}
else{
  this.agregarArticulo(articulo);
}








}

agregarArticulo(articulo:articulo){

this.articuloservice.agregarArticulo(articulo); 
this.snackBar.open('Se fue creado con Exito','',{
  duration:3000


}
);
this.route.navigate(['/listar']);

}


editarArticulo(articulo:articulo){
this.articuloservice.editarArticulo(articulo,this.idArticulo)
this.snackBar.open('Se Edito con Exito','',{
  duration:3000


}
);
this.route.navigate(['/listar']);

}

obtenerArticulo(){

const  articulo:articulo=this.articuloservice.obtenerArticulo(this.idArticulo);
this.myForm.patchValue({

  nombreArticulo:articulo.nombreArticulo,
  referencia:articulo.referencia,
  cantidad:articulo.cantidad,
  fechaDeIngreso:articulo.fechaDeIngreso,
  talla:articulo.talla
})
}


  }

