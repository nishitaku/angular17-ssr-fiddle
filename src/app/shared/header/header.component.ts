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
  uuid = '';

  ngOnInit(): void {
    this.fetchNow();
    this.fetchUuid();
  }

  private fetchNow() {
    this.http
      .get('https://worldtimeapi.org/api/timezone/Asia/Tokyo')
      .subscribe((now: any) => {
        this.now = now['datetime'];
      });
  }

  private fetchUuid() {
    this.http
      .get('https://www.uuidtools.com/api/generate/v4/count/1')
      .subscribe((uuid: any) => {
        this.uuid = uuid;
      });
  }
}
