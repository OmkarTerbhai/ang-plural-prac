import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gun } from './gun/gun';
import { SiteHeader } from "./site-header/site-header";
import { Catalog } from "./catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gun, SiteHeader, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fun');
}
