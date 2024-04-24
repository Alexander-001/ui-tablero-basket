import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  private user: User = { id: '1', username: '', email: '' };

  public usernameInput = new FormControl('');
  public passwordInput = new FormControl('');

  public hasLoaded: boolean = false;

  onChangeUsernameInput() {
    const value: string = this.usernameInput.value || '';
    this.user.username = value;
  }

  onChangePasswordInput() {
    const value: string = this.passwordInput.value || '';
    this.user.email = value;
  }

  onLogin(): void {
    this.hasLoaded = true;
    this.authService.login(this.user).subscribe((user) => {
      if (!user.username) {
        this.hasLoaded = false;
        return;
      }
      this.hasLoaded = false;
      this.router.navigate(['/']);
    });
  }

  /* showSnackbar(message: string): void {
    this.snackbar.open(message, 'Aceptar', {
      duration: 2500,
    });
  } */
}
