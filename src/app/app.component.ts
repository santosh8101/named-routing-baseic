import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isThirdActive: boolean;
  private router: Router;
  constructor(router: Router) {
    this.router = router;
    this.isThirdActive = false;
  }
  thirdComponent = () => {
    this.isThirdActive = !this.isThirdActive;
    if (this.isThirdActive) {
      this.router.navigate([{outlets: {threeoutlet : ['threepath']}}]);
    } else {
      this.router.navigate([{outlets: {threeoutlet : null}}]);
    }

  }
}
