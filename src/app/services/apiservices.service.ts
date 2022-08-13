import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private _http:HttpClient) {}

    apiUrl = "https://newsapi.org/v2/top-headlines?country=pl&apiKey=8c68956f9c9a4dd083bff723b32b56fe";

   topNews():Observable<any>{
    return this._http.get(this.apiUrl);
   }

}
