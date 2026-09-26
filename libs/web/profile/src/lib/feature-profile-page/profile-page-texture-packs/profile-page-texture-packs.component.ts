import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sl-profile-page-texture-packs',
  imports: [],
  templateUrl: './profile-page-texture-packs.component.html',
  styleUrl: './profile-page-texture-packs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageTexturePacksComponent {
  #route = inject(ActivatedRoute);
  profileId = this.#route.parent?.parent?.snapshot.paramMap.get('id') ?? 'me';
  isOwnProfile = this.profileId === 'me';
  authorUserId = this.isOwnProfile ? undefined : Number(this.profileId);
}
