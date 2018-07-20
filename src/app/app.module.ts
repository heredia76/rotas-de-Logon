import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { CursosGard } from './guard/cursos.guard';
import { AlunosGard } from './guard/alunos.guard';
import { AlunosDeactivateGuard } from './guard/alunos-deactivate.gurad';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule,
    // routing
  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuard,
    CursosGard,
    AlunosGard,
    AlunosDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
