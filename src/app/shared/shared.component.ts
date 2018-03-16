import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  isThirdActive: boolean;
  private router: Router;
  private activateRoute: ActivatedRoute;
  constructor(router: Router, activateRoute: ActivatedRoute) {
    this.router = router;
    this.activateRoute = activateRoute;
    this.isThirdActive = false;
  }

  ngOnInit() {
  }

  thirdComponent = () => {
    this.isThirdActive = !this.isThirdActive;
    if (this.isThirdActive) {
      this.router.navigate([{outlets: {threeoutlet : ['threepath']}}], {relativeTo: this.activateRoute.parent});
    } else {
      this.router.navigate([{outlets: {threeoutlet : null}}], { relativeTo: this.activateRoute.parent});
    }

  }

}
