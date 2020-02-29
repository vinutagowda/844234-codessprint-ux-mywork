import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../model/app';
import { AppService } from '../service/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent implements OnInit {
  app:App;
  
  
 
  constructor(
    private appService:AppService,
    private actRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    let name=this.actRoute.snapshot.params.name;
    if(name){
      
      this.appService.getAllByName(name).subscribe(
        (data) =>{
          this.app=data;
          
        }
      );

    }else{
      this.app={
        name:'',
        age:0,
        address:'',
        city:'',
       package:0,
       trainerPreference:'',
      phone:''
      
      };
     
    
}
  }

    save(){
      let ob:Observable<App>; 
        ob=this.appService.add(this.app);
      
      ob.subscribe(
        (Data) =>{
         
          this.router.navigateByUrl("");
        },
        
      );
    }
}
