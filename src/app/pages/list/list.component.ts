import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ListModel } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

  public list: any = new ListModel('');

  constructor(private router: Router, private route: ActivatedRoute, private dataSvc: DataService) { }

  ngOnInit(): void {

    const id: any = this.route.snapshot.paramMap.get('id');

    if(id !== 'id'){

      this.dataSvc.getList(id).subscribe(res => {

        this.list = res;
        this.list.id = id;

        console.log(res);

      })

    }

  }

  addItem(){
    alert('Add')
  }

}
