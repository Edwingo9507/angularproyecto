import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

constructor(private authGoogleService:AuthGoogleService,private rote:Router){


}

logOut(){
  this.authGoogleService.logout();
  this.rote.navigate(['login']);
}

}
