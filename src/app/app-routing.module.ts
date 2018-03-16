import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import {OneComponent} from './shared/one/one.component';
import { TwoComponent } from './shared/two/two.component';
import { ThreeComponent } from './shared/three/three.component';
const routes: Routes = [{path: 'shared', component: SharedComponent,
                         children : [{path: 'one', component: OneComponent},
                                     {path: 'two', component: TwoComponent},
                                     {path: 'threepath', outlet: 'P', component: ThreeComponent}
                                    ],
                        },
                      ];
@NgModule({
  imports : [RouterModule.forRoot(routes, {useHash: true})],
  exports : [RouterModule]
})
export class AppRoutingModule { }
