import { Router } from '@angular/router-deprecated';

export abstract class InfoComponent {
  constructor(protected router: Router) {

  }

  goBack(): void{
    this.router.navigate(['Weather']);
  }
}