import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListModel } from '../models/list.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'https://angular-2dolist-default-rtdb.firebaseio.com';
  public uid: any;
  public prueba = 'https://angular-2dolist-default-rtdb.firebaseio.com/users/bX5FE3ZOEhNmfWfJslv17Ud6Tj92.json';

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      if (user) this.uid = user.uid;
    });
  }

  createList(title: string) {
    const newList = new ListModel(title);
    return this.http.post(`${this.url}/users/${this.uid}.json`, newList)
      .pipe(
        map((res: any) => {
          newList.id = res.name;
          return newList;
        })
      )
  }
    
  getList(id: string){
    return this.http.get(`${this.url}/users/${id}.json`)
      .pipe(
        map(this.mapLists)
      )
  }


  private mapLists(listsObj: any){

    const lists: ListModel[] = [];

    if(listsObj === null) { return lists;}

    Object.keys(listsObj).forEach(key => {

      lists.push({
        id: key,
        title: listsObj[key].title,
        complete: listsObj[key].complete,
        items: listsObj[key].items
      });
    });

    return lists;
  }

  deleteList(id: string){
    return this.http.delete(`${this.url}/users/${this.uid}/${id}.json`)
  }

}
