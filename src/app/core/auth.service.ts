import { Router } from '@angular/router';
import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthService {
  authState: any = null
  constructor(public afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) {
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  login() {
    var my = this;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      function (result) {
        if (result.user.emailVerified) {
          my.toastr.success("Welcome " + result.user.displayName + "!", "Info", {
            timeOut: 4000,
            progressBar: true,
            progressAnimation: 'increasing'
          });
        }

      }
    );
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/blog']);
    this.toastr.success("User logged out successfully!");
  }
}
