import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, JsonPipe, NgFor],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent implements OnInit {
  user = signal<any>(null);
  shibes = signal<any>(null);

  http = inject(HttpClient);

  ngOnInit() {
    this.fetchUser();
    this.fetchShibes();
  }

  getUser() {
    this.fetchUser();
  }

  getShibes() {
    this.fetchShibes();
  }

  private fetchUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe((user) => {
        this.user.set(user);
      });
  }

  private fetchShibes() {
    this.http
      .get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .subscribe((shibes) => {
        this.shibes.set(shibes);
      });
  }
}
