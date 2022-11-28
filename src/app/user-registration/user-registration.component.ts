import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  address=""
  dob=""
  email=""
  username=""
  password=""
  confirmpassword=""
                    
userRegister=()=>
{
  let data:any={
    
    "name":this.name,   
    "address":this.address,
    "dob":this.dob,
    "email":this.email,
    "username":this.username,   
    "password":this.password,
    "confirmpassword":this.confirmpassword

  }

  console.log(data)
}

}
