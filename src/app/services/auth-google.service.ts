import { Injectable } from '@angular/core';
import { AuthConfig,OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oauthService: OAuthService) {
    this.initLogin();
   }

  initLogin(){
    const config: AuthConfig={
      issuer:'https://accounts.google.com',
      strictDiscoveryDocumentValidation:false,
      clientId:'516102502295-t2tgh3bbkqhkcp2bacndsmad0ci4b5s8.apps.googleusercontent.com',
      redirectUri:window.location.origin + '/main',
      scope:'openid profile email',
    }

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login(){
    this.oauthService.initLoginFlow();

  }
  logout(){
    this.oauthService.logOut();
    
  }

  getProfile(){
    return this.oauthService.getIdentityClaims();
    
  }
}
