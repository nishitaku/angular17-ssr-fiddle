import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ShibesComponent } from '../../shared/shibes/shibes.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [HeaderComponent, ShibesComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent {}
