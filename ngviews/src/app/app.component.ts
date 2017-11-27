import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  constructor(){}

  msg:string="hello angular2";
  msgList:string[]=['angular1','angular2','angular4'];

  ngOnInit(){}

  add(){
    this.msgList.push('angular');
  }
}
