import { Directive, input } from '@angular/core';

@Directive({
  selector: '[slUnsavedChanges]',
  standalone: true,
  host: { '(window:beforeunload)': 'beforeUnload($event)' },
})
export class UnsavedChangesDirective {
  slUnsavedChanges = input(false);

  beforeUnload(event: BeforeUnloadEvent) {
    if (this.slUnsavedChanges()) event.preventDefault();
  }
}
