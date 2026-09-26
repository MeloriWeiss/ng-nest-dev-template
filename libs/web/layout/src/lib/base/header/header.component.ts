import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  PopoverComponent,
  SearchInputComponent,
  SvgComponent,
} from '@sl/web/common-ui';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sl-header',
  imports: [
    SearchInputComponent,
    SvgComponent,
    RouterLink,
    ReactiveFormsModule,
    RouterLinkActive,
    PopoverComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
