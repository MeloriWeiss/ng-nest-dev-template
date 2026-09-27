import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sl-profile-page-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page-edit.component.html',
  styleUrl: './profile-page-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageEditComponent {}
