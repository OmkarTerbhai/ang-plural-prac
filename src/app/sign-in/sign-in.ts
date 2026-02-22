import { Component, inject } from '@angular/core';
import { UserCredential } from './user-credential.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInService } from '../sign-in-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  credential: UserCredential = {email: '', password: ''};
  private signInSvc: SignInService = inject(SignInService);
  private router: Router = inject(Router);

  onSubmit() {
    this.signInSvc.signIn(this.credential).subscribe((ele) => {
        console.log(`Signed In: ${ele.userName}`);

        this.router.navigate(['/catalog']);
    });
  }


}
