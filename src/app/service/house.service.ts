import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../model/house";
import {Category} from "../model/category";

const API_URL = 'http://localhost:8080/api/houses'

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<House[]> {
    return this.httpClient.get<House[]>(API_URL + `/list`);
  }
  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL + `/category`);
  }

  findById(id: any): Observable<House> {
    return this.httpClient.get<House>(API_URL + `/findById/${id}`);
  }
  update(id:number,house:House):Observable<House>{
    return this.httpClient.put<House>(API_URL+`/edit/${id}`,house);
  }save(house:House):Observable<House>{
    return this.httpClient.post<House>(API_URL+`/add`,house);
  }
  delete(id:number){
    return this.httpClient.delete<House>(API_URL+`/delete/${id}`)
  }
}
