import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from './videoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videoangular';
  data:any;

  constructor(private videoS: VideoserviceService){}

  ngOnInit(){
    this.videoS.getFiles()
     .subscribe(resp=>{
       this.data = resp;
       console.log(this.data);
     },error=>{
       console.log(error);
     })
  }
}
