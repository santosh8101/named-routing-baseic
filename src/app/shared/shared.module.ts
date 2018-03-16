import { NgModule } from '@angular/core';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FourComponent } from './four/four.component';
@NgModule({
  imports: [SharedRoutingModule],
  declarations: [OneComponent, TwoComponent, ThreeComponent, SharedComponent, FourComponent]
})
export class SharedModule { }
