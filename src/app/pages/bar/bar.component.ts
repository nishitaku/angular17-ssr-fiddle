import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ShibesComponent } from '../../shared/shibes/shibes.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [HeaderComponent, ShibesComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {}
