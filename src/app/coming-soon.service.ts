import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CoomingSoon {
  email: string;
  vendorTypeKey: string;
  city: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class CoomingSoonService {
  BASE_URL = 'https://agota-api.azurewebsites.net/api';

  constructor(private _httpClient: HttpClient) {}

  createComingSoon(payload: CoomingSoon): Observable<boolean> {
    return this._httpClient.post<boolean>(
      `${this.BASE_URL}/coming-soon`,
      payload
    );
  }
}
