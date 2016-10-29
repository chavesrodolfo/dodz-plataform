import * as firebase from 'firebase'; // See https://github.com/angular/angularfire2/issues/529
import { AuthProviders, AuthMethods } from 'angularfire2';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCyt0Os9abxIDJDG7yxo-cvde9CnuQROd0",
  authDomain: "dodz-plataform.firebaseapp.com",
  databaseURL: "https://dodz-plataform.firebaseio.com",
  storageBucket: "dodz-plataform.appspot.com",
  messagingSenderId: "159441842697"
};

export const FIREBASE_AUTH_CONFIG = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

export class Config {
  public static FIREBASE_CONFIG = FIREBASE_CONFIG;
  public static FIREBASE_AUTH_CONFIG = FIREBASE_AUTH_CONFIG;
}
