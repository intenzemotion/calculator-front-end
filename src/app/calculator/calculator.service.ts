import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calculator } from './calculator.model';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    private backendUrl = 'http://localhost:8080/api/calculator'; // TODO

    constructor(private http: HttpClient) { }

    // this is where we start communicate with backend
    calculate(request: Calculator): Observable<Calculator> {
        const url = `${this.backendUrl}/${request.operation.toLowerCase()}`;
        return this.http.post<Calculator>(url, request);
    }
}
