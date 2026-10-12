import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Se usa como atributo sobre un <a-entity> para que A-Frame lo trate como parte de la escena.
@Component({
  selector: 'a-entity[app-name-label]',
  template: `
    <a-text
      value="Sebastian Ariel"
      align="center"
      color="#FFFFFF"
      width="6"
      position="0 0 -3">
    </a-text>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NameLabel {}
