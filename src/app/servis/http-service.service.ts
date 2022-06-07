import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../Interface/student";
import {environment} from "../../environments/environment";
import {Item} from "../interface/item";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiServerURL = environment.ApiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getStudent(): Observable<Student[]>{
    return this.http.get<any>(`${this.apiServerURL}/student/all`)
  }

  public getStudentById(id: number): Observable<Student>{
    return this.http.get<any>(`${this.apiServerURL}/student/find/${id}`);
  }


  public addStudent(student: Student): Observable<Student>{
    return this.http.post<any>(`${this.apiServerURL}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student>{
    return this.http.put<any>(`${this.apiServerURL}/student/update`, student);
  }

  public deleteStudent(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/student/delete/${studentId}`);
  }

  public getItems(): Observable<Item[]>{
    return this.http.get<any>(`${this.apiServerURL}/item/all`)
  }

  public getItemById(id: number): Observable<Item>{
    return this.http.get<any>(`${this.apiServerURL}/item/find/${id}`);
  }


  public addItem(item: Item): Observable<Item>{
    return this.http.post<any>(`${this.apiServerURL}/item/add`, item);
  }

  public updateItem(item: Item): Observable<Item>{
    return this.http.put<any>(`${this.apiServerURL}/item/update`, item);
  }

  public deleteItem(itemId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/item/delete/${itemId}`);
  }

}
