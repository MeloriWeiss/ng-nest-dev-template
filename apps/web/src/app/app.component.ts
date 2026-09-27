import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationManagerComponent } from '@sl/web/shared';
import { ModalHostComponent, ToastHostComponent } from '@sl/web/common-ui';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationManagerComponent,
    ModalHostComponent,
    ToastHostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
