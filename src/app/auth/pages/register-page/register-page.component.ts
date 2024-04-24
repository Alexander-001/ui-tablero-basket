import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, UserAdd } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  private user: User = { id: '', username: '', email: '' };

  public usernameInput = new FormControl('');
  public nameInput = new FormControl('');
  public passwordInput = new FormControl('');

  public hasLoaded: boolean = false;

  onChangeUsernameInput() {
    const value: string = this.usernameInput.value || '';
    this.user.username = value;
  }
  onChangeNameInput() {
    const value: string = this.passwordInput.value || '';
    this.user.username = value;
  }

  onChangePasswordInput() {
    const value: string = this.passwordInput.value || '';
    this.user.email = value;
  }

  onAddUser(): void {
    /*  this.authService.addUser(this.user).subscribe((user) => {
      if (!user.token) {
        this.hasLoaded = false;
        return;
      }
      this.hasLoaded = false;
      this.router.navigate(['/']);
    }); */
  }

  /*   showSnackbar(message: string): void {
    this.snackbar.open(message, 'Aceptar', {
      duration: 2500,
    });
  } */
}
