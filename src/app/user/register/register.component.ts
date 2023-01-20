import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  form!: FormGroup;
  loading = false;
  submitted = false;

  user: any;
  firstname:string = "takeAlot";
  Lastname: string ="Mecer";
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
      firstname:this.firstname,
      lastname:this.Lastname,
      email:this.email,
      usertype: this.usertype
    };

      this.userService.createUser(val).subscribe(res =>{
        console.log(val)
      })
  }
}
