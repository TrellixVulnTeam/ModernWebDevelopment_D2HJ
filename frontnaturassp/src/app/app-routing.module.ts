import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { EfetivarpedidoComponent } from './componentes/efetivarpedido/efetivarpedido.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';

const routes: Routes = [
  {path: '', component: DestaquesComponent},
  {path: 'detalhe/:idProduto', component: DetalhesComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'efetivarpedido', component: EfetivarpedidoComponent},
  {path: 'recibo/:num', component: ReciboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
