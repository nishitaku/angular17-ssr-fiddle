import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {}
