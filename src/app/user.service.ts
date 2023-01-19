import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

readonly APIUrl = "http://localhost:63167/api";
    constructor(private http: HttpClient) {}

    createUser(val: any) {
        return this.http.post(this.APIUrl + '/user', val);
    }

    // getUser(): Observable < any[] > {
    //     return this.http.get < any > (this.APIUrl + '/user');
    // }

    updateUser(id: any) {
        return this.http.put(this.APIUrl + '/user', id);
    }
    deleteUser(id: any) {
        return this.http.delete(this.APIUrl + '/user/' + id);
    }
}
