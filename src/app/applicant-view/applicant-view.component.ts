import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { App } from '../model/app';

@Component({
  selector: 'app-applicant-view',
  templateUrl: './applicant-view.component.html',
  styleUrls: ['./applicant-view.component.css']
})
export class ApplicantViewComponent implements OnInit {
  apps:App[];
  errMsg:string;
  
  constructor(private appService :AppService) { }

  ngOnInit() {
    this.loadData();
  }
    loadData(){
      
  
      this.appService.getAll().subscribe(
        (data) =>{ this.apps=data; },
       
      );

      }
    }
