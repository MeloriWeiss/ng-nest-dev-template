import { computed, Injectable } from '@angular/core';
import { UserResponseDto } from '@sl/shared/users';
import { BaseStore } from '../../store';

interface CurrentAccountState {
  user: UserResponseDto | null;
  profile: any | null;
  isProfileLoading: boolean;
  avatarUrl: string | null;
}

const initialState: CurrentAccountState = {
  user: null,
  profile: null,
  isProfileLoading: false,
  avatarUrl: null,
};

@Injectable({ providedIn: 'root' })
export class CurrentUserStore extends BaseStore<CurrentAccountState> {
  readonly user = computed(() => this.state().user);
  readonly profile = computed(() => this.state().profile);
  readonly avatarUrl = computed(() => this.profile()?.avatarUrl ?? null);

  constructor() {
    super(initialState);
  }

  authenticate(user: UserResponseDto) {
    const isSameUser = this.user()?.id === user.id;

    if (isSameUser) {
      this.patchState({ user });
      return;
    }

    this.patchState({ user, profile: null, isProfileLoading: false });
  }

  clear() {
    this.resetState();
  }

  updateProfile(profile: Partial<unknown>) {
    const currentProfile = this.profile();
    if (!currentProfile) return;
    this.patchState({ profile: { ...currentProfile, ...profile } });
  }
}
