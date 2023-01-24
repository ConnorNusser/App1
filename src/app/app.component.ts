import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App1';
  resToAdd = '';
  members: string[]=[];

  addMember(){
    this.members.push(this.resToAdd);
    console.log(this.members);
  }
  onInput(resName: string){
    this.resToAdd = resName;
    console.log(resName);
  }
  resetMembers(){
    this.members = [];
    console.log(this.members);
    console.log("Lol");
  }
}

