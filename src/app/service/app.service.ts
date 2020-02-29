import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from '../model/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl:string;
   constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:4449/allapplicants";
  }
  getAll() : Observable<App[]>{
    return this.httpClient.get<App[]>(this.baseUrl)
  }

  getAllByName(name:string) : Observable<App>{
     return this.httpClient.get<App>(`${this.baseUrl}/${name}`);
  }

  add(app:App) :Observable<App>{
    return this.httpClient.post<App>(this.baseUrl,App);
  }

  save(app:App) :Observable<App>{
   return this.httpClient.put<App>(this.baseUrl,App);
 }

   delete(name:number) :Observable<void>{
       return this.httpClient.delete<void>(`${this.baseUrl}/${name}`);
   }
}
