import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent implements OnInit {
  user = signal<any>(null);

  http = inject(HttpClient);

  ngOnInit() {
    this.fetchUser();
  }

  getUser() {
    this.fetchUser();
  }

  private fetchUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe((user) => {
        this.user.set(user);
      });
  }
}
