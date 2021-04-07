import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListModel } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html'
})

export class PendingsComponent implements OnInit {

  public uid: any;
  public lists: ListModel[] = [];

  constructor(public dataSvc: DataService, private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {

      if (user) {
        this.uid = user.uid;

        this.getLists(this.uid);
      }

    })

  }

  ngOnInit(): void {
  }

  getLists(id: string) {
    this.dataSvc.getLists(id).subscribe(lists => {
      this.lists = lists;
      console.log(lists);
    })
  }

  editList(id: string | undefined) {
    console.log(id);
  }

  deleteList(id: any, i: number) {
    console.log(id);
    console.log(i);
    this.dataSvc.deleteList(id).subscribe(res => {

      this.lists.splice(i, 1);

    })
  }

}
