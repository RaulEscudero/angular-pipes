import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'raul';
  public nameUpper: string = 'RAUL';
  public fullName: string = 'rAuL esCUdEro';

  public customDate: Date = new Date();
}
