import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {

  constructor(private _services:ApiservicesService) { }

  ngOnInit(): void {
  
  this._services.topNews().subscribe((result)=>{
    console.log(result)
  })
  
  }

}
