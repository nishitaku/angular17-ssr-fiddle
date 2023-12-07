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
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private readonly http = inject(HttpClient);

  @Input({ required: true }) title = 'Non title';
  @Input({ transform: booleanAttribute }) prerenderEnabled = false;

  uuid = '';

  ngOnInit(): void {
    this.fetchUuid();
  }

  private fetchUuid() {
    this.http
      .get('https://www.uuidtools.com/api/generate/v4/count/1')
      .subscribe((uuid: any) => {
        this.uuid = uuid;
      });
  }
}
