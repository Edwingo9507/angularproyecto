import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { elementAt, filter } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { ArticuloService } from 'src/app/services/articulo.service';
import { articulo } from '../models/articulo';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteService } from 'src/app/services/reporte.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css']
})
export class ListArticulosComponent {
  displayedColumns: string[] = ['imagen','nombreArticulo', 'referencia', 'talla' ,'Cantidad', 'fechaIngreso','Acciones'];
  dataSource = new MatTableDataSource <articulo>();


lisArticulo:articulo[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
  constructor(private articuloservice:ArticuloService,public dialog:MatDialog,public snackBar:MatSnackBar,private reporteService:ReporteService){}

  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
  }

ngOnInit(){

  this.cargarArticulo();
}

  filter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



cargarArticulo(){


  this.lisArticulo=this.articuloservice.getArticulo();
  this.dataSource = new MatTableDataSource<articulo>(this.lisArticulo);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

  
}

eliminarArticulo(index:number):void{

const dialogRef=this.dialog.open(MensajeConfirmacionComponent,{
  width :'350px',
  data:{mensaje:'Desea eliminar el articulo'}
});

dialogRef.afterClosed().subscribe(result=>{
  if (result=="aceptar")

  {this.articuloservice.eliminarArticulo(index)
  this.cargarArticulo()
  this.snackBar.open('Se elimino con Exito','',{
    duration:3000
  })
}
  
})


}

generarPDF(){

  this.reporteService.generarpdf();
}

}
export class FormFieldOverviewExample {}



