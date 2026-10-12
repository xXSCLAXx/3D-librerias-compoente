import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NameLabel } from './name-label/name-label';

@Component({
  selector: 'app-root',
  imports: [NameLabel],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {}
