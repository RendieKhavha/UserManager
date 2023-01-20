import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  form!: FormGroup;
  loading = false;
  submitted = false;

  user: any;
  password:string = "";
  email: string ="company@fun.com";
  usertype: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
) { }

ngOnInit(): void {
  this.createUser();

}


  onSubmit(): void{
    //this.userService.getUser().subscribe(data =>{
      //alert(data.toString());
      //console.log(data)
    //})
  }

  createUser(): void{
    var val = {
      
      email:this.email,
      password:this.password,
      usertype: this.usertype
    };

      this.userService.createUser(val).subscribe(res =>{
        console.log(val)
      })
  }
}
