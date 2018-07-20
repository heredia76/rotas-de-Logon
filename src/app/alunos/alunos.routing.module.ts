import { AlunosGard } from '../guard/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, CanActivate, CanDeactivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate.gurad';

const alunosRoutes = [
  {path: '', component: AlunosComponent,
  CanActivate: [AlunosGard],
  children : [
    {path: 'novo', component: AlunoFormComponent },
    {path: ':id', component: AlunoDetalheComponent },
    {path: ':id/editar', Component: AlunoFormComponent, CanDeactivate: [AlunosDeactivateGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}
