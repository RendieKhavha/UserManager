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
  firstname:string = "takeAlot";
  Lastname: string ="Mecer";
  email: string ="company@fun.com";

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
      firstname:this.firstname,
      lastname:this.Lastname,
      email:this.email
    };

      this.userService.createUser(val).subscribe(res =>{
        console.log(val)
      })
  }
}
