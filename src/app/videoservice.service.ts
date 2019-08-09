import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  host:string = "http://localhost:8081/"
  constructor(private http:HttpClient) { }


  getFiles():Observable<any>{
    return this.http.get(this.host+'files');
  }
}
