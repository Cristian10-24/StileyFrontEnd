import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { PanelComponent } from './pages/panel/panel.component';

const routes: Routes = [
  { path: 'panel', component: PanelComponent },
  { path: 'usuario', component: UsuariosComponent },
  { path: 'tabla', component: TablaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasboardRoutingModule { }
