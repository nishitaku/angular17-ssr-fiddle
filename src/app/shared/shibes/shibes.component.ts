import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shibes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shibes.component.html',
  styleUrl: './shibes.component.css',
})
export class ShibesComponent implements OnInit {
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
