import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  #http = inject(HttpClient);
  #apiConfig = inject(API_CONFIG);

  uploadAvatar(file: File) {
    const body = new FormData();
    body.append('file', file);

    return this.#http.post<{
      avatarUrl: string;
    }>(`${this.#apiConfig.baseUrl}users/me/avatar`, body);
  }

  removeAvatar() {
    return this.#http.delete<{
      avatarUrl: null;
    }>(`${this.#apiConfig.baseUrl}users/me/avatar`);
  }
}
