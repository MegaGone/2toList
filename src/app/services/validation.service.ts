import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  existTitle(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> | any{

    if(!control.value){
      return Promise.resolve(null)
    }

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        // aca debo de validar si ya existe ese nombre del titulo

        if(control.value === 'mocca'){
          resolve({ existe: true })
        } else{
          resolve(null);
        }

      }, 3500)

    });

  }

}
