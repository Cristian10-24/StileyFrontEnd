import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './pages/panel/panel.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { VentasComponent } from './pages/ventas/ventas.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    TablaComponent,
    PanelComponent,
    ProductosComponent,
    PedidosComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
    DasboardRoutingModule, 
    SharedModule
  ]
})
export class DasboardModule { }
