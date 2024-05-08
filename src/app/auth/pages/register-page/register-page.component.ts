import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User, UserAdd } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../login-page/login-page.component.css'],
})
export class RegisterPageComponent {
  constructor(private authService: AuthService, private router: Router) {}
  private user: User = { username: '', email: '', password: '' };

  public registerForm = new FormGroup({
    email: new FormControl<string>(''),
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>(''),
  });

  onSubmit(): void {
    if (this.registerForm.invalid) return;
    const { email, username, password, confirmPassword } =
      this.registerForm.value;
  }

  onClickLogin(): void {
    this.router.navigate(['/auth/jahdkljlkasj']);
  }
}
