import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent {
 @Input()
 comp;
}