import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from './models/residence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = "http://localhost:3000/Residence"; 
  constructor( public http :HttpClient) { }
  getResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>("http://localhost:3000/Residence") ;
  }

  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }

  addResidence( residence: Residence ){
    return this.http.post<Residence>(`${this.apiUrl}`,residence)
  }

  deleteResidence(id : number) {
    return this.http.delete("http://localhost:3000/Residence/"+id)
  }

  updateResidence(residence:Residence) {
    return this.http.put<Residence>("http://localhost:3000/Residence/"+residence.id,residence)
  }

}
