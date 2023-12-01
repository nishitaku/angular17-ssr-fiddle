import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnInit,
  booleanAttribute,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private readonly http = inject(HttpClient);

  @Input({ required: true }) title = 'Non title';
  @Input({ transform: booleanAttribute }) prerenderEnabled = false;

  now = '';

  ngOnInit(): void {
    this.fetchNow();
  }

  private fetchNow() {
    this.http
      .get('https://worldtimeapi.org/api/timezone/Asia/Tokyo')
      .subscribe((now: any) => {
        this.now = now['datetime'];
      });
  }
}
