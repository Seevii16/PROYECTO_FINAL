import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { MangasComponent } from './componentes/mangas/mangas.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { AuthGuard } from "./auth.guard";
import { RecogerTokenService } from "./services/recoger-token.service";
import { MangaComponent } from './componentes/manga/manga.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    MangasComponent,
    PerfilComponent,
    MangaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : RecogerTokenService,
    multi : true
  }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
