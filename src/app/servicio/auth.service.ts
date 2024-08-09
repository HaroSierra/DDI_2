// 

import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    const auth = getAuth();
    return from(signInWithEmailAndPassword(auth, email, password));
  }

  logout() {
    const auth = getAuth();
    return from(auth.signOut());
  }
}
