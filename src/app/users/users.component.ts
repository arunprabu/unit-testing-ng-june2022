import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  isLoading = true;
  city: string = '';
  
  userList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // faking one ajax call. 
    setTimeout(() => {
      this.city = 'London';
      this.isLoading = false;

      // filling wiht fake data. not keeping it inside timeout
      this.userList = [{
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        }, {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125"
      }];
    }, 4000);


    
  }

}
