import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'main', component:MainComponent},
{path:'agregar',component:EditArticulosComponent},
{path:'agregar/:id',component:EditArticulosComponent},
{path:'listar',component:ListArticulosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
