import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guard/auth.guard';
import { CursosGard } from './guard/cursos.guard';

const APP_ROUTES: Routes = [
  { path: 'alunos',
      loadChildren: 'app/alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard],
      // canActivateChild: [AlunosGard]
  },

  { path: 'cursos',
      loadChildren: 'app/alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGard]
  },

  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
