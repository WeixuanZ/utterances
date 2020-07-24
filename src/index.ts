import { ConfigurationComponent } from './configuration-component';

document.querySelector('h2#how-it-works ~ p:last-child')!
  .insertAdjacentElement('afterend', new ConfigurationComponent().element);
