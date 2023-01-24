import { Component, Injectable, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
class membersInfo implements OnInit{
  @Input() Number: number;
  @Input() Name: string;

  ngOnInit(): void {

    // You can use this value now
    this.Number = 0;
    this.Name = "";

}

  constructor(code?: number, name?: string) {
          if(code && name){
            this.Name = name;
            this.Number = code;
          }else{
            this.Number = 0;
            this.Name = "";
          }
 
  }

  getSalary() : number {
      return 10000;
  }
}
export class AppComponent {
  title = 'Home Page';
  resToAdd = '';
  resNumber = 0;
  members: membersInfo[]=[];

  addMember(){
    let newMember = new membersInfo(this.resNumber, this.resToAdd);
    this.members.push(newMember);
    console.log(this.members);
    this.resNumber = this.resNumber + 1;
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

