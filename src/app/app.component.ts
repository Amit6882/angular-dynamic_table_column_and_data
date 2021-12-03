import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  userLists: any[] = [];
  userKeys: string[] = [];

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.userLists = res.data;
      this.userKeys = Object.keys(this.userLists[0]);
      console.log(this.userLists);
      console.log(this.userKeys); 
      // for(let i in this.userLists) {
      //   console.log('this.userLists', i);
      //   console.log(Object.keys(this.userLists[i]));

      // }
    })
  }
}
