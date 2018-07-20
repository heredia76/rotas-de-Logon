import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AlunosModule } from './alunos/alunos.module';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guard/auth.guard';
import { CursosGard } from './guard/cursos.guard';
import { AlunosGard } from './guard/alunos.guard';

const appRoutes: Routes = [

  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
// tslint:disable-next-line:eofline
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
