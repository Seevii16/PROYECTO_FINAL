import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LoginComponent } from "./componentes/login/login.component";
import { RegistrarseComponent } from "./componentes/registrarse/registrarse.component";
import { MangasComponent  } from "./componentes/mangas/mangas.component";
import { MangaComponent } from "./componentes/manga/manga.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: 'mangas',
    component : MangasComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'registrarse',
    component : RegistrarseComponent
  },
  
  
   {
    path:'mangas/:id',
    component : MangaComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
