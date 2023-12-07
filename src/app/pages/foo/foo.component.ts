import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, JsonPipe, NgFor, HeaderComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent implements OnInit {
  shibes = signal<any>(null);

  private readonly http = inject(HttpClient);

  ngOnInit() {
    this.fetchShibes();
  }

  getShibes() {
    this.fetchShibes();
  }

  private fetchShibes() {
    this.http
      .get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .subscribe((shibes) => {
        this.shibes.set(shibes);
      });
  }
}
