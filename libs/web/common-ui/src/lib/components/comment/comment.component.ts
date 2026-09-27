import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { SvgComponent } from '../index';
import { CommentItem } from '@sl/web/data-access/shared';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sl-comment',
  imports: [SvgComponent, DatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  comment = input.required<CommentItem>();
  depth = input.required<number>();
  replyRequested = output<number>();
}
